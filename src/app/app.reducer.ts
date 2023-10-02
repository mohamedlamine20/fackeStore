import { createReducer, on } from "@ngrx/store";
import { initialState } from "./app.state";
import {  loadCountrySuccess, loadProductSuccess } from "./app.actions";

export const _appReducer = createReducer(initialState,on(
    loadProductSuccess,(state,action)=>{
        return {
            ...state,
            products:action.products
        }
    }
),on(
    loadCountrySuccess,(state,action)=>{
        return {
            ...state,
            countries:action.countries
        }
    }
))

export function AppReducer (state:any,action:any){
return _appReducer(state,action);
}