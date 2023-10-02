import { Country } from "./model/country";
import { Product } from "./product";

export interface AppState{
   products:Product[],
   countries:Country[],
}

export const initialState:AppState= {
   products:[],
   countries:[]
}

export interface productSate{
   products:Product[]
}