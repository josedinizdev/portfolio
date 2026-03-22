import Parties from "../model/Parties";

import * as get from './partiesRepository.get';
import * as modify from './partiesRepository.modify';

const PartiesRepository = { get, modify }

export default PartiesRepository;