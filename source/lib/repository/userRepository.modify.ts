import { table } from "../base/supabaseClient";
import { User, UserDto } from "../model";

const tbuser = table("tbuser");

export async function create(user: UserDto): Promise<User | null> {
  const { data, error } = await tbuser
    .insert([user])
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function update(id: string, user: UserDto): Promise<User | null> {
  const { data, error } = await tbuser
    .update(user)
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function remove(id: string): Promise<boolean> {
  const { error } = await tbuser.delete().eq("id", id);
  if (error) throw new Error(error.message);
  return true;
}