export type TimeStampZ =
  `${number}-${number}-${number}T${number}:${number}:${number}${"Z" | `+${number}:${number}` | `-${number}:${number}`}`;