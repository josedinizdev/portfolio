import { Warning } from "@/lib/base/errors/Warning";
import PartiesRepository from "@/lib/repository/partiesRepository";

export async function deleteParty(id: string) {
  if (!id) throw new Warning("ID do cliente é obrigatório.", 400);
  
  if (await PartiesRepository.modify.remove(id)) {
    return true;
  }

  throw new Warning("Algo deu errado, tente novamente mais tarde.", 400);
}