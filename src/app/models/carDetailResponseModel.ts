import { CarDetail } from "./carDetail";
import { ResponseModel } from "./responsemodel";

export interface CarDetailResponseModel extends ResponseModel {
    data: CarDetail[];
}