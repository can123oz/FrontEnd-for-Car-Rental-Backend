import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/carDetail';
import { Color } from 'src/app/models/color';
import { CarServiceService } from 'src/app/services/car-service.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  
  carDetails : CarDetail[] = [];

  constructor(private carService:CarServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      console.log('PARAMS',params);       
      if(params["colorId"]) {
        this.getCarsByColor(params["colorId"]);
      } else if(params["brandId"]) {
        this.getCarsByBrand(params["brandId"]);
      } else {
        this.getCarDetail();
      } 
    });
  }

  getCarDetail() {
    this.carService.getCarDetail().subscribe(response => {
      this.carDetails = response.data;
    });
  } 

  getCarsByColor(colorId:Number) {
    this.carService.getCarsByColor(colorId).subscribe(response => {
      this.carDetails = response.data;
    });
  }

  getCarsByBrand(brandId : number) {
    console.log(brandId);
    this.carService.getCarsByBrand(brandId).subscribe(response => {
      this.carDetails = response.data;
    })
  }

}