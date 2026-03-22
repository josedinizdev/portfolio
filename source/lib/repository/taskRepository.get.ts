import { table } from "../base/supabaseClient";
import { Task, TaskDto } from "../model";

const tbtask = table("tbtask");

export async function findAll(): Promise<Task[]> {
  const { data, error } = await tbtask.select("*");
  if (error) throw new Error(error.message);
  return data;
}

export async function findById(id: string): Promise<Task | null> {
  const { data, error } = await tbtask
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function findAllByMissionId(idmission: string): Promise<Task[] | null> {
  const { data, error } = await tbtask
    .select("*")
    .eq("idmission", idmission);
  
  if (error) throw new Error(error.message);
  return data;
}

export async function findAllByProjectId(idproject: string): Promise<Task[] | null> {
  const { data, error } = await tbtask
    .select("*,tbmissions!inner (id, idproject)")
    .eq("tbmissions.idproject", idproject);

  if (error) throw new Error(error.message);
  return data;
}
