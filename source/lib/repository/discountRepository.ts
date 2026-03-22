import Discount from "../model/Discount";

import * as get from './discountRepository.get';
import * as modify from './discountRepository.modify';

const DiscountRepository = { get, modify }

export default DiscountRepository;