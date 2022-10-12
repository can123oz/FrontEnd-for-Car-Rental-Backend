import { Car } from "./car";
import { ResponseModel } from "./responsemodel";

export interface CarModelResponse extends ResponseModel {
    data: Car[];
}