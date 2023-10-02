import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient,private apollo:Apollo) { }
  
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`https://fakestoreapi.com/products`);
  } 

  query(query:string){
    return this.apollo.watchQuery({
      query:gql`{${query}}`
    }).valueChanges;
  }



  searchProduct(query:string){
  let params : HttpParams = new HttpParams();
   params = params.append('q',query) 
 
    return this.http.get(`https://dummyjson.com/products/search`,{params});

}

  }
