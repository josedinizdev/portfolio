import { NextResponse } from "next/server";
import { Warning } from "./errors/Warning";

export default function threat(err: any) {
  if (err instanceof Warning) {
    return NextResponse.json({ error: err }, { status: err.code });  
  } else {
    console.log(err);
    return NextResponse.json({ error: { name: "Erro no servidor" } }, { status: 500 });
  }
}