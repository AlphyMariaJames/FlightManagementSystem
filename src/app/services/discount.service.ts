import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const DISCOUNT_API = 'http://localhost:8081/discount/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor(private http: HttpClient, private router: Router) { }

  addDiscount(discount: any) {
    return this.http.post(DISCOUNT_API + 'save', discount, httpOptions);
  }
  getAllDiscount(): any {
    return this.http.get(DISCOUNT_API + 'getall/', httpOptions);
  }
 
  deleteDiscount(discount: any) {
    return this.http.delete(DISCOUNT_API + 'delete/'+ discount.id, httpOptions);
  }
}