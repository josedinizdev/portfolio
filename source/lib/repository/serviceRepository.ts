import Service from "../model/Service";

export type ServiceDto = Omit<Service, "id" | "created_at">;

import * as get from './serviceRepository.get';
import * as modify from './serviceRepository.modify';

const ServiceRepository = { get, modify }

export default ServiceRepository;