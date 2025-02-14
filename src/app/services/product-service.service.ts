import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productInterface } from '../models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  addProdctData(data: productInterface) {
    return this.http.post("http://localhost:3000/product", data);
  }

  getProdctData() {
    return this.http.get<productInterface[]>("http://localhost:3000/product");
  }

  deleteProductData(id: number) {
    return this.http.delete(`http://localhost:3000/product/${id}`);
  }

  singleProductData(id: string) {
    return this.http.get<productInterface>(`http://localhost:3000/product/${id}`);
  }

  updateProductData(data: productInterface) {
    return this.http.put(`http://localhost:3000/product/${data.id}`, data);
  }

  trendyProducs() {
    return this.http.get<productInterface[]>("http://localhost:3000/product?_limit=8");
  }

  searchProducts(query: string) {
    return this.http.get<productInterface[]>(`http://localhost:3000/product?q=${query}`);
  }
}
