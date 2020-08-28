import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DomainService {
  
  

  constructor(public http:HttpClient) { }


  getData() {
    console.log("hii serviece")
    return this.http.get("http://demo0757661.mockable.io/getProducts");
  }

  getData2() {
    return this.http.get("http://demo1196374.mockable.io/productListing%3Flist=true");
  }


}
