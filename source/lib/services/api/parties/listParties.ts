import { Warning } from "@/lib/base/errors/Warning";
import PartiesRepository from "@/lib/repository/partiesRepository";

export async function listParties() {
  const parties = await PartiesRepository.get.findAll();

  if (parties) {
    return parties;
  }

  throw new Warning("Algo deu errado, tente novamente mais tarde.", 400);
}