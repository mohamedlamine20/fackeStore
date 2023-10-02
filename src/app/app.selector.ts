import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.state";


export const STATE ='state';

const  getProducts= createFeatureSelector<AppState>(STATE);

export const getAllProducts= createSelector(getProducts,(state)=>{
    return state.products;
})




const  getCountries= createFeatureSelector<AppState>(STATE);

export const getAllCountries= createSelector(getCountries,(state)=>{   
    return state.countries;
})


export const getProductById = (id:number)=>createSelector(getProducts,(state)=>{
    const product = state.products.filter((product)=>product.id===id);
    return product;
})

