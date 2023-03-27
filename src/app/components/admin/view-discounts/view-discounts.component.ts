import { Component } from '@angular/core';
import { DiscountService } from 'src/app/services/discount.service';

@Component({
  selector: 'app-view-discounts',
  templateUrl: './view-discounts.component.html',
  styleUrls: ['./view-discounts.component.css']
})
export class ViewDiscountsComponent {

  discount = {
    id: 0,
    discountCode: "",
    discountPercent: ""
  }
 
  discounts: any[] = [];
  requests: any;
  constructor(private discountService: DiscountService) { }
 
  ngOnInit(): void {
    //this.airlines = this.flightService.getAllFlights().subscribe((res: any)=>this.requests=res);
    this.discountService.getAllDiscount().subscribe(
      (data: any) => {
        this.discounts = data;
      },
      (err: any) => console.error(err),
      () => console.log('getAirlines completed')
    );
  }
  delete(discount: any) {
    this.discountService.deleteDiscount(discount).subscribe((response: any) => {
      console.log(response);
      window.location.reload()
    },
      function (error) {
        //alert("Error occured, deletion failed!");
        window.location.reload()
      })
  }
}
