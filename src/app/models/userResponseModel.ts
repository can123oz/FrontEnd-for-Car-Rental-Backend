import { ResponseModel } from "./responsemodel";
import { user } from "./user";

export interface UserResponseModel extends ResponseModel {
    data: user[],
}