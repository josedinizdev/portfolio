import { table } from "../base/supabaseClient";
import { Attachments, AttachmentsDto } from "../model";

const tbattachments = table("tbattachments");

export async function findAll(): Promise<Attachments[]> {
  const { data, error } = await tbattachments.select("*");
  if (error) throw new Error(error.message);
  return data;
}

export async function findById(id: string): Promise<Attachments | null> {
  const { data, error } = await tbattachments
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
}


