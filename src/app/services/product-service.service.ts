import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(
    private http: HttpClient
  ) { }

  resolve(route: ActivatedRouteSnapshot){
    console.log("resolve")
    return ;
  }
  
  getProduct(){
    return this.http.get('../../assets/json/home.json').toPromise();
  }
}
