import { Product } from "./product";
import { ResponseModel } from "./responseModel";

export interface ProductResponseModel extends ResponseModel{
    // Bana gelicek datayi karsilayacak model
    data:Product[]
    
}