import { table } from "../base/supabaseClient";
import { Service } from "../model";
import { ServiceDto } from "./serviceRepository";

const tbservice = table("tbservice");

export async function create(service: ServiceDto): Promise<Service | null> {
  const { data, error } = await tbservice
    .insert([service])
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function update(id: string, service: ServiceDto): Promise<Service | null> {
  const { data, error } = await tbservice
    .update(service)
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function remove(id: string): Promise<boolean> {
  const { error } = await tbservice.delete().eq("id", id);
  if (error) throw new Error(error.message);
  return true;
}