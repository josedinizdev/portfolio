import { table } from "../base/supabaseClient";
import { Service, ServiceDto } from "../model";

const tbservice = table("tbservice");

export async function findAll(): Promise<Service[]> {
  const { data, error } = await tbservice.select("*");
  if (error) throw new Error(error.message);
  return data;
}

export async function findById(id: string): Promise<Service | null> {
  const { data, error } = await tbservice
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
}


