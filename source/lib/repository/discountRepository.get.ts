import { table } from "../base/supabaseClient";
import { Discount, DiscountDto } from "../model";

const tbdiscount = table("tbdiscount");

export async function findAll(): Promise<Discount[]> {
  const { data, error } = await tbdiscount.select("*");
  if (error) throw new Error(error.message);
  return data;
}

export async function findById(id: string): Promise<Discount | null> {
  const { data, error } = await tbdiscount
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
}


