import { table } from "../base/supabaseClient";
import { Parties, PartiesDto } from "../model";

const tbparties = table("tbparties");

export async function create(parties: PartiesDto): Promise<Parties | null> {
  const { data, error } = await tbparties
    .insert([parties])
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function update(id: string, parties: PartiesDto): Promise<Parties | null> {
  const { data, error } = await tbparties
    .update(parties)
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function remove(id: string): Promise<boolean> {
  const { error } = await tbparties.delete().eq("id", id);
  if (error) throw new Error(error.message);
  return true;
}