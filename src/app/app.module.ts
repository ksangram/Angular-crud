import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ShowroomComponent } from './showroom/showroom.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowroomComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path:"", component: ShowroomComponent },
      { path:"products", component: ProductsComponent }
        
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
