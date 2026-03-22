import { Warning } from "@/lib/base/errors/Warning";
import PartiesRepository from "@/lib/repository/partiesRepository";

export async function getParty(id: string) {
  if (!id) throw new Warning("ID do cliente é obrigatório.", 400);
  const party = await PartiesRepository.get.findById(id);

  if (party && party.id) {
    return party;
  }

  throw new Warning("Cliente não encontrado.", 404);
}