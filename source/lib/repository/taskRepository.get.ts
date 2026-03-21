import { table } from "../base/supabaseClient";
import { Task } from "../model";
import { TaskDto } from "./taskRepository";

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


