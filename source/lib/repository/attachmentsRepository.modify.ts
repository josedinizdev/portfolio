import { table } from "../base/supabaseClient";
import { Attachments } from "../model";
import { AttachmentsDto } from "./attachmentsRepository";

const tbattachments = table("tbattachments");

export async function create(attachments: AttachmentsDto): Promise<Attachments | null> {
  const { data, error } = await tbattachments
    .insert([attachments])
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function update(id: string, attachments: AttachmentsDto): Promise<Attachments | null> {
  const { data, error } = await tbattachments
    .update(attachments)
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function remove(id: string): Promise<boolean> {
  const { error } = await tbattachments.delete().eq("id", id);
  if (error) throw new Error(error.message);
  return true;
}