import UserRepository from "@/lib/repository/userRepository";
import CredentialsRepository from "@/lib/repository/credentialsRepository";
import utils from "@/lib/utils";
import { emailAvailability } from "./emailAvailability";
import { Warning } from "@/lib/base/errors/Warning";

export async function createUser(name: string, email: string, password: string) {
  if (!name) throw new Warning("Informe o seu nome.", 400);
  if (!email) throw new Warning("Informe o e-mail.", 400);
  if (!password) throw new Warning("Informe a senha.", 400);
  if (await emailAvailability(email)) {
    throw new Warning("E-mail está em uso.", 403);
  }

  const user = await UserRepository.modify.create({ name });

  if (user && user.id) {
    const hash = utils.hashSHA256(password);

    const credentials = await CredentialsRepository.modify.create({ 
      email,
      iduser: user.id,
      password: hash
    });

    if (credentials && credentials.id) {
      user.email = credentials.email;
      return user;
    }
  }

  throw new Warning("Algo deu errado, tente novamente mais tarde.", 400);
}