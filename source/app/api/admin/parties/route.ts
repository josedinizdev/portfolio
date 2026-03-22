import { Warning } from "@/lib/base/errors/Warning";
import threat from "@/lib/base/threat";
import { isLogged } from "@/lib/services/api/isLogged";
import { createParty } from "@/lib/services/api/parties/createParty";
import { listParties } from "@/lib/services/api/parties/listParties";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    isLogged(req);
    
    let parties = await listParties();

    return NextResponse.json(parties);
  } catch (err) {
    return threat(err);
  }
}

export async function POST(req: Request) {
  try {
    isLogged(req);

    const data = await req.json();
    const party = await createParty(data);
    return NextResponse.json(party);
  } catch (err) {
    return threat(err);
  }
}