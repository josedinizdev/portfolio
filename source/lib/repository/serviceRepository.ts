import Service from "../model/Service";

import * as get from './serviceRepository.get';
import * as modify from './serviceRepository.modify';

const ServiceRepository = { get, modify }

export default ServiceRepository;