import { table } from "../base/supabaseClient";
import { Task, TaskDto } from "../model";

const tbtask = table("tbtask");

export async function create(task: TaskDto): Promise<Task | null> {
  const { data, error } = await tbtask
    .insert([task])
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function update(id: string, task: TaskDto): Promise<Task | null> {
  const { data, error } = await tbtask
    .update(task)
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function remove(id: string): Promise<boolean> {
  const { error } = await tbtask.delete().eq("id", id);
  if (error) throw new Error(error.message);
  return true;
}