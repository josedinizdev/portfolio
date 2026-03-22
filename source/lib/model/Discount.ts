import { TimeStampZ } from "./globals";

export default interface Discount {
  id: string,
  origin: string,
  idorigin: string,
  value: number,
  title: string,
  created_at: TimeStampZ
}

export type DiscountDto = Omit<Discount, "id" | "created_at">;