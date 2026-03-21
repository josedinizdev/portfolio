import { table } from "../base/supabaseClient";
import { Project } from "../model";
import { ProjectDto } from "./projectRepository";

const tbproject = table("tbproject");

export async function create(project: ProjectDto): Promise<Project | null> {
  const { data, error } = await tbproject
    .insert([project])
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function update(id: string, project: ProjectDto): Promise<Project | null> {
  const { data, error } = await tbproject
    .update(project)
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function remove(id: string): Promise<boolean> {
  const { error } = await tbproject.delete().eq("id", id);
  if (error) throw new Error(error.message);
  return true;
}