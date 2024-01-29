export interface Validators{
  validate(data: any): Error | void;
}