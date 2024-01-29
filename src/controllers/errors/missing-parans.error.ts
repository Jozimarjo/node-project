export class MissingParamError extends Error{
  constructor(fieldName:string){
    super(`${fieldName} is required`)
  }
}