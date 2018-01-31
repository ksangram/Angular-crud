import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private http: Http) { }

  ConfirmationString:string = "New Vehicle has been added..";
  isAdded:boolean = false;
  productObj:object = {}

  addNewVehicle = function(products){
        this.productObj = {
          
          "name":products.name,
          "color":products.color,
          "model":products.model,
          "cost":products.cost
        }

        this.http.post("http://localhost:3000/vehicle/",this.productObj).subscribe((res:Response) => {
          this.isAdded = true;
        })
  }

  ngOnInit() {
  }

}
