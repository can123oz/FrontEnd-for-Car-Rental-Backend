import { Brand } from "./brand";
import { ResponseModel } from "./responsemodel";

export interface BrandResponseModel extends ResponseModel{
    data: Brand[];
}