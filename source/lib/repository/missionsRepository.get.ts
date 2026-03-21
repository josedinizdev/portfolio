import { table } from "../base/supabaseClient";
import { Missions } from "../model";
import { MissionsDto } from "./missionsRepository";

const tbmissions = table("tbmissions");

export async function findAll(): Promise<Missions[]> {
  const { data, error } = await tbmissions.select("*");
  if (error) throw new Error(error.message);
  return data;
}

export async function findById(id: string): Promise<Missions | null> {
  const { data, error } = await tbmissions
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
}


