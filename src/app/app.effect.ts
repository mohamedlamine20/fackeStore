import { Injectable } from "@angular/core";
import { ProductService } from "./product.service";
import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadCountryStart, loadCountrySuccess, loadProductStart, loadProductSuccess } from "./app.actions";
import { exhaustMap, map } from "rxjs";

@Injectable()
export class AppEffect{
    constructor(private productService:ProductService,private store:Store,private actions$:Actions){

    }


     loadProduct$=createEffect(()=>{
        return this.actions$.pipe(
            ofType(loadProductStart),
            exhaustMap((action)=>{
                return this.productService.getProducts().pipe(
                    map((data)=>{                       
                        return loadProductSuccess({products:data})
                    })
                )
            })
        )
     })

     loadCountry$=createEffect(()=>{
        return this.actions$.pipe(
            ofType(loadCountryStart),
            exhaustMap((action)=>{
                return this.productService.query(`
                   countries{
                      awsRegion
                      capital
                      code
                      currency
                    }`).pipe(
                    map((data:any)=>{
                        return loadCountrySuccess({countries:data.data.countries})
                    })
                )
            })
        )
     })


}