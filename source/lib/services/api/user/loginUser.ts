import CredentialsRepository from "@/lib/repository/credentialsRepository";
import utils from "@/lib/utils";
import { Warning } from "@/lib/base/errors/Warning";
import { getUser } from "./getUser";

export async function loginUser(email: string, password: string) {
  if (!email) throw new Warning("Informe o e-mail.", 400);
  if (!password) throw new Warning("Informe a senha.", 400);

  const credentials = await CredentialsRepository.get.findByEmail(email);

  if (credentials && credentials.id) {
    const hash = utils.hashSHA256(password);

    if (credentials.password == hash) {
      return getUser(credentials.iduser);
    } else {
      throw new Warning("Senha incorreta.", 400);
    }

  } else {
    throw new Warning("E-mail não foi encontrado.", 400);
  }
}