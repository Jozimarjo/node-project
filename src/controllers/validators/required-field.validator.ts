import { MissingParamError } from "../errors/missing-parans.error";
import { Validators } from "./validator.interface";

export class RequiredFieldValidator implements Validators {
  constructor(private fieldName: string){}

  validate(data: any) {
    if(!data[this.fieldName]){
      return new MissingParamError(this.fieldName)
    }
  }

}

