import { table } from "../base/supabaseClient";
import { Credentials } from "../model";
import { CredentialsDto } from "./credentialsRepository";

const tbcredentials = table("tbcredentials");

export async function findAll(): Promise<Credentials[]> {
  const { data, error } = await tbcredentials.select("*");
  if (error) throw new Error(error.message);
  return data;
}

export async function findById(id: string): Promise<Credentials | null> {
  const { data, error } = await tbcredentials
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function findByIdUser(iduser: string): Promise<Credentials | null> {
  const { data, error } = await tbcredentials
    .select("*")
    .eq("iduser", iduser)
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function findByEmail(email: string): Promise<Credentials | null> {
  const { data, error } = await tbcredentials
    .select("*")
    .eq("email", email)
    .single();
  if (error) {
    console.log(error.message);
    return null;
  };
  return data;
}


