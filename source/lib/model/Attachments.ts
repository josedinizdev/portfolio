import { TimeStampZ } from "./globals";

export default interface Attachments {
  id: string,
  type: string,
  origin: string,
  idorigin: string,
  path: string,
  title: string,
  created_at: TimeStampZ
}

export type AttachmentsDto = Omit<Attachments, "id" | "created_at">;