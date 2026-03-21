import { table } from "../base/supabaseClient";
import { Project } from "../model";
import { ProjectDto } from "./projectRepository";

const tbproject = table("tbproject");

export async function findAll(): Promise<Project[]> {
  const { data, error } = await tbproject.select("*");
  if (error) throw new Error(error.message);
  return data;
}

export async function findById(id: string): Promise<Project | null> {
  const { data, error } = await tbproject
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
}


