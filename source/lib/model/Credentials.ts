import { TimeStampZ } from "./globals";

export default interface Credentials {
  id: string,
  iduser: string,
  email: string,
  password: string,
  created_at: TimeStampZ
}

export type CredentialsDto = Omit<Credentials, "id" | "created_at">;