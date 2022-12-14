import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandEditComponent } from './components/brand/brand-edit/brand-edit.component';
import { BrandaddComponent } from './components/brandadd/brandadd.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarComponent } from './components/car/car.component';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorUpdateComponent } from './components/color/color-update/color-update.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes : Routes = [
  {
    path:"", pathMatch:"full",component:CarComponent
  },
  {
    path:"cars", component:CarComponent
  },
  {
    path:"cars/color/:colorId", component:CarComponent
  },
  {
    path:"cars/brand/:brandId", component:CarComponent
  },
  {
    path:"cars/add", component:CarAddComponent
  },
  {
    path:"cars/cardetail/:carId", component:CardetailComponent
  },
  {
    path:"payment",component:PaymentComponent
  },
  {
    path:"brand/add",component:BrandaddComponent
  },
  {
    path:"color/add",component:ColorAddComponent
  },
  {
    path:"brand/:id",component:BrandaddComponent
  },
  {
    path:"brand/update", component:BrandEditComponent
  },  
/*   {
    path:"color/update", component:ColorUpdateComponent
  }, */
  {
    path:"**",component:PageNotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
