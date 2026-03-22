import { TimeStampZ } from "./globals";

export default interface Service {
  id: string,
  title: string,
  markup: number,
  price: number,
  cost: number,
  created_at: TimeStampZ
}

export type ServiceDto = Omit<Service, "id" | "created_at">;