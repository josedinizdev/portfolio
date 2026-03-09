import { TimeStampZ } from "./globals";

export default interface Credentials {
    id: string,
    iduser: string,
    email: string,
    password: string,
    created_at: TimeStampZ
}