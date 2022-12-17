export default class AppError extends Error {
  readonly isControlled: boolean;
  constructor(
    message: string,
    readonly statusCode: number,
    readonly renderView: string
  ) {
    super(message);
    this.isControlled = true;

    Error.captureStackTrace(this, this.constructor);
  }
}
