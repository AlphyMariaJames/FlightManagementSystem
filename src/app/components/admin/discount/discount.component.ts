import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiscountService } from 'src/app/services/discount.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  phoneFlag: boolean = false;
  discount: any = {};
 
  constructor(private router: Router, private discountService: DiscountService) { }
  ngOnInit(): void { }
 
  createNewDiscount() {
 
    const observable = this.discountService.addDiscount(this.discount)
    observable.subscribe((response: any) => {
      console.log(response);
      //this.airlines.push(response);
      this.router.navigate(['/admin/getDiscounts']);
    },
      function (error) {
        alert("Something went wrong!")
      })
  }
  resetForm(): void {
    window.location.reload()
  }
 
  nameFlag: boolean = false;
  validateName() {
    //var flag = /^[a-zA-Z ]+$/.test(this.newAirline.airlineName);
    if (!(this.discount.discountCode.length>=3)) {
      this.nameFlag = true;
    }
    else {
      this.nameFlag = false;
    }
  }

  buttonFlag: boolean = true;
  enableButton() {
    this.buttonFlag = this.nameFlag || this.phoneFlag;
  }

}
