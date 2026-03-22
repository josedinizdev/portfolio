import { Warning } from "@/lib/base/errors/Warning";
import { PartiesDto } from "@/lib/model";
import PartiesRepository from "@/lib/repository/partiesRepository";

export async function updateParty(id: string, partyDto: PartiesDto) {
  if (!partyDto.name) throw new Warning("Informe o seu nome.", 400);
  const party = await PartiesRepository.modify.update(id, partyDto);

  if (party && party.id) {
    return party;
  }

  throw new Warning("Algo deu errado, tente novamente mais tarde.", 400);
}