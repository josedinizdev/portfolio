import { table } from "../base/supabaseClient";
import { Credentials } from "../model";
import { CredentialsDto } from "./credentialsRepository";

const tbcredentials = table("tbcredentials");

export async function create(credentials: CredentialsDto): Promise<Credentials | null> {
  const { data, error } = await tbcredentials
    .insert([credentials])
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function update(id: string, credentials: CredentialsDto): Promise<Credentials | null> {
  const { data, error } = await tbcredentials
    .update(credentials)
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function remove(id: string): Promise<boolean> {
  const { error } = await tbcredentials.delete().eq("id", id);
  if (error) throw new Error(error.message);
  return true;
}