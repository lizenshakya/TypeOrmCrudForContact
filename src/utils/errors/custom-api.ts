export class CustomAPIError extends Error {
  statusCode: number;

  constructor(message) {
    super(message)
  }
}