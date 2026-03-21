import Attachments from "../model/Attachments";

export type AttachmentsDto = Omit<Attachments, "id" | "created_at">;

import * as get from './attachmentsRepository.get';
import * as modify from './attachmentsRepository.modify';

const AttachmentsRepository = { get, modify }

export default AttachmentsRepository;