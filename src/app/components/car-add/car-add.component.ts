import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandServiceService } from 'src/app/services/brand-service.service';
import { CarServiceService } from 'src/app/services/car-service.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  constructor(private toestr:ToastrService, private carService : CarServiceService,
    private form : FormBuilder, private brandService : BrandServiceService,
    private colorService : ColorService) { }

  carForm : FormGroup;
  colors : Color[];
  brands : Brand[];


  ngOnInit(): void {
    this.createForm();
    this.getBrands();
    this.getColors();
  }

  createForm() {
    this.carForm = this.form.group({
      name:["",Validators.compose([
        Validators.required,
        Validators.minLength(2),
      ])],
      description:["",Validators.compose([
        Validators.required
      ])],
      brandId:["",Validators.compose([
        Validators.required
      ])],
      colorId:["",Validators.compose([
        Validators.required
      ])],
      dailyPrice:["",Validators.compose([
        Validators.required
      ])],
      modelYear:["",Validators.compose([
        Validators.required
      ])],
    })
  }

  addCar() {
    let car = this.carForm.value;
    console.log(car);
    if (this.carForm.valid) {
      this.carService.addCar(car).subscribe(response => {
        console.log(response.message);
        this.toestr.success("Car added", car.name);
      }, errorResponse => {
        console.log(errorResponse.message);
        this.toestr.error("Error", errorResponse.message);
      });
    }
  }

  getColors() {
    this.colorService.getAllColor().subscribe(response => {
      if (response.success) {
        this.colors = response.data;
        console.log("colors mesajı : ", response.message);
      }
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe(response => {
      if (response.success) {
        this.brands = response.data;
        console.log("brands mesaj : ", response.message);
      }
    });
  }


}