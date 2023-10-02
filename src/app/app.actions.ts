import { createAction, props } from "@ngrx/store";
import { Product } from "./product";
import { Country } from "./model/country";



 const LOAD_PRODUCT_START='[app page]load products start';
 const LOAD_PRODUCT_SUCCESS='[app page]load products success';


 export const loadProductStart = createAction(LOAD_PRODUCT_START);
 
 export const loadProductSuccess = createAction(LOAD_PRODUCT_SUCCESS,props<{products:Product[]}>());





 const LOAD_COUNTRY_START='[app page]load countries start';
 const LOAD_COUNTRY_SUCCESS='[app page]load countries success';


 export const loadCountryStart = createAction(LOAD_COUNTRY_START);
 
 export const loadCountrySuccess = createAction(LOAD_COUNTRY_SUCCESS,props<{countries:Country[]}>());

 