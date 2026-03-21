import { TimeStampZ } from "./globals";

export default interface User {
  id: string,
  name: string,
  created_at: TimeStampZ
  email?: string
}