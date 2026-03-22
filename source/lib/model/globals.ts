export type TimeStampZ =
  `${number}-${number}-${number}T${number}:${number}:${number}${"Z" | `+${number}:${number}` | `-${number}:${number}`}`;

export type NextParams<T extends string> = {
  params: Promise<{
    [K in T]: string
  }>
}