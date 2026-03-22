import { table } from "../base/supabaseClient";
import { Discount, DiscountDto } from "../model";

const tbdiscount = table("tbdiscount");

export async function create(discount: DiscountDto): Promise<Discount | null> {
  const { data, error } = await tbdiscount
    .insert([discount])
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function update(id: string, discount: DiscountDto): Promise<Discount | null> {
  const { data, error } = await tbdiscount
    .update(discount)
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function remove(id: string): Promise<boolean> {
  const { error } = await tbdiscount.delete().eq("id", id);
  if (error) throw new Error(error.message);
  return true;
}