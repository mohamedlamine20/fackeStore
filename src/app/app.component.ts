import { Component, OnInit } from '@angular/core';
import { AppState } from './app.state';
import { Store } from '@ngrx/store';
import { loadCountryStart, loadCountrySuccess, loadProductStart } from './app.actions';
import { getAllCountries, getAllProducts} from './app.selector';
import { Observable } from 'rxjs';
import { Product } from './product';
import { ProductService } from './product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  

  products$ ! : Observable<Product[]>;
  constructor(private store:Store<AppState>){

  }
  ngOnInit(): void {
   this.store.dispatch(loadProductStart());

   this.products$= this.store.select(getAllProducts);

   this.store.dispatch(loadCountryStart());


     }
  title = 'fackeStore';

}
