import { InvalidFieldValueError } from "../errors/invalid-field-value.error";
import { Validators } from "./validator.interface";

export class FieldSizeValidator implements Validators {
  constructor(private fieldName:string, private valueSize:number){}

  validate(data: any): void | Error {
    if(data[this.fieldName] < this.valueSize){
      return new InvalidFieldValueError(`The ${this.fieldName} must be greater than ${this.valueSize}`);
    }
  }

}