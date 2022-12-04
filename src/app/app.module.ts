import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { AppRoutingModule } from './app-routing.module';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { BrandPipe } from './pipes/brand.pipe';
import { ColorPipe } from './pipes/color.pipe';
import { CarPipe } from './pipes/car.pipe';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PaymentComponent } from './components/payment/payment.component';
import { BrandaddComponent } from './components/brandadd/brandadd.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    CarComponent,
    RentalComponent,
    CardetailComponent,
    BrandPipe,
    ColorPipe,
    CarPipe,
    CarFilterComponent,
    FilterPipe,
    PaymentComponent,
    BrandaddComponent,
    CarAddComponent,
    ColorAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:2000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }