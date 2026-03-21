import { TimeStampZ } from "./globals";

export default interface Attachment {
  id: string,
  type: string,
  origin: string,
  idorigin: string,
  path: string,
  title: string,
  created_at: TimeStampZ
}