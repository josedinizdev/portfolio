import Discount from "../model/Discount";

export type DiscountDto = Omit<Discount, "id" | "created_at">;

import * as get from './discountRepository.get';
import * as modify from './discountRepository.modify';

const DiscountRepository = { get, modify }

export default DiscountRepository;