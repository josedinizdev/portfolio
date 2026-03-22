import { table } from "../base/supabaseClient";
import { User, UserDto } from "../model";

const tbuser = table("tbuser");

export async function findAll(): Promise<User[]> {
  const { data, error } = await tbuser.select("*");
  if (error) throw new Error(error.message);
  return data;
}

export async function findById(id: string): Promise<User | null> {
  const { data, error } = await tbuser
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
}


