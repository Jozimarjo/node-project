import { DateRangeError } from "../../../controllers/errors/date-range.error";
import { Validators } from "../validator.interface";

export class EventServiceValidator implements Validators{
  validate(data: any): void | Error {
    if(data.started_at > data.finished_at){
      throw new DateRangeError('The start date cannot be later than the end date');
    }
  }

}