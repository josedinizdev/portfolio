import { table } from "../base/supabaseClient";
import { Parties, PartiesDto } from "../model";

const tbparties = table("tbparties");

export async function findAll(): Promise<Parties[]> {
  const { data, error } = await tbparties.select("*");
  if (error) throw new Error(error.message);
  return data;
}

export async function findById(id: string): Promise<Parties | null> {
  const { data, error } = await tbparties
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
}


