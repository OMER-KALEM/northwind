import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  hostUrl = 'https://localhost:44321/';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<Product>> {
    let apiUrl = this.hostUrl + 'api/products/getAllProducts';
    return this.httpClient.get<ListResponseModel<Product>>(apiUrl);
  }

  getProductsByCategoryId(
    categoryId: number
  ): Observable<ListResponseModel<Product>> {
    let apiUrl =
      this.hostUrl +
      'api/products/getAllProductsByCategoryId?categoryId=' +
      categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(apiUrl);
  }

  addProduct(product: Product): Observable<ResponseModel> {
    let apiUrl = this.hostUrl + 'api/products/addProduct';
    return this.httpClient.post<ResponseModel>(apiUrl, product);
  }
}
