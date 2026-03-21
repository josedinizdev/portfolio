import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!,
);

export function table(tableName: string) {
  return supabase.schema(process.env.SUPABASE_DB_SCHEMA || "public").from(tableName);
}

export default supabase;