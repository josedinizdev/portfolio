
import { Warning } from "@/lib/base/errors/Warning";
import threat from "@/lib/base/threat";
import { NextParams } from "@/lib/model/globals";
import { isLogged } from "@/lib/services/api/isLogged";
import { deleteParty } from "@/lib/services/api/parties/deleteParty";
import { getParty } from "@/lib/services/api/parties/getParty";
import { updateParty } from "@/lib/services/api/parties/updateParty";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: NextParams<"id">) {
  try {
    isLogged(req);
    
    const { id } = await params;
    let party = await getParty(id);

    return NextResponse.json(party);
  } catch (err) {
    return threat(err);
  }
}

export async function PUT(req: Request, { params }:  NextParams<"id">) {
  try {
    isLogged(req);

    const { id } = await params;
    const data = await req.json();
    await updateParty(id, data);
    return new Response(null,{ status: 204 });
  } catch (err) {
    return threat(err);
  }
}

export async function DELETE(req: Request, { params }: NextParams<"id">) {
  try {
    isLogged(req);

    const { id } = await params;
    await deleteParty(id);
    return new Response(null,{ status: 204 });
  } catch (err) {
    return threat(err);
  }
}