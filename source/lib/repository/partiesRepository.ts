import Parties from "../model/Parties";

export type PartiesDto = Omit<Parties, "id" | "created_at">;

import * as get from './partiesRepository.get';
import * as modify from './partiesRepository.modify';

const PartiesRepository = { get, modify }

export default PartiesRepository;