import { TimeStampZ } from "./globals";

export default interface Parties {
  id: string,
  name: string,
  entity_type: 'individual' | 'company',
  status: 'lead' | 'qualified' | 'unqualified' |
          'contacted' | 'responded' |
          'negotiating' | 'proposal_sent' |
          'won' | 'recurring' |
          'lost'| 'discarted' | 'canceled',
  email?: string,
  phone?: string,
  document?: string,
  lead_origin?: string,
  observations?: string,
  created_at: TimeStampZ
}