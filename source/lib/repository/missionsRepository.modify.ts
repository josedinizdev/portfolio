import { table } from "../base/supabaseClient";
import { Missions, MissionsDto } from "../model";

const tbmissions = table("tbmissions");

export async function create(missions: MissionsDto): Promise<Missions | null> {
  const { data, error } = await tbmissions
    .insert([missions])
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function update(id: string, missions: MissionsDto): Promise<Missions | null> {
  const { data, error } = await tbmissions
    .update(missions)
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function remove(id: string): Promise<boolean> {
  const { error } = await tbmissions.delete().eq("id", id);
  if (error) throw new Error(error.message);
  return true;
}