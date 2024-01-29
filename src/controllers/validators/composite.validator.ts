import { Validators } from "./validator.interface";

export class CompositeValidators implements Validators{

  constructor(private validators: Validators[]){}

  validate(data: any){
    for(const validator of this.validators){
      const error = validator.validate(data)
      if(error){
        return error
      }
    }
  }

}