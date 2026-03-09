import { Warning } from "@/lib/base/errors/Warning";
import { isLogged } from "@/lib/services/api/isLogged";
import { createUser } from "@/lib/services/user/createUser";
import { getUser } from "@/lib/services/user/getUser";
import utils from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    let user = isLogged(req);
    user = await getUser(user.id);

    return NextResponse.json(user);
  } catch (err) {
    if (err instanceof Warning) {
      return NextResponse.json({ error: err }, { status: err.code });  
    } else {
      return NextResponse.json({ error: { name: "Erro no servidor" } }, { status: 500 });
    }
  }
}

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    const user = await createUser(name, email, password);
    const jwt = utils.encryptJWT(user, process.env.JWT_KEY);

    return NextResponse.json({ token: jwt });
  } catch (err) {
    if (err instanceof Warning) {
      return NextResponse.json({ error: err }, { status: err.code });  
    } else if (err instanceof Error) {
      console.log(err.name, err.message, err.stack);
      return NextResponse.json({ error: { name: "Erro no servidor" } }, { status: 500 });
    }
  }
}