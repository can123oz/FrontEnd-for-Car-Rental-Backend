import { ResponseModel } from "./responsemodel";

export interface DetailResponseModel<T> extends ResponseModel {
    data: T,
}