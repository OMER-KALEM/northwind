import { Category } from "./category";
import { ResponseModel } from "./responseModel";

export interface CategoryResponseModel extends ResponseModel{
    // Bana gelicek datayi karsilayacak model
    data:Category[]
    
}