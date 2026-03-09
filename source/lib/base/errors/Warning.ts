export class Warning extends Error {
  name: string
  code: number
  constructor(message: string, code: number, errorOptions?: ErrorOptions) {
    super(message, errorOptions);
    this.name = message;
    this.code = code;
  }
}