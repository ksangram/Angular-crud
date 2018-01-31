import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.css']
})
export class ShowroomComponent implements OnInit {

  constructor(private http: Http) { }


  vehicle = [];

          fetchData = function(){
            this.http.get("http://localhost:3000/vehicle").subscribe(
              (res: Response) => {
                this.vehicle = res.json();
              }
            )
          }
             
          

  ngOnInit() {
        this.fetchData();
  }

}
