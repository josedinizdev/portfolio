import { Warning } from "@/lib/base/errors/Warning";
import PartiesRepository from "@/lib/repository/partiesRepository";
import { PartiesDto } from "@/lib/model";

export async function createParty(partyDto: PartiesDto) {
  if (!partyDto.name) throw new Warning("Informe o seu nome.", 400);
  const party = await PartiesRepository.modify.create(partyDto);

  if (party && party.id) {
    return party;
  }

  throw new Warning("Algo deu errado, tente novamente mais tarde.", 400);
}