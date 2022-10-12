import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetail';
import { CarServiceService } from 'src/app/services/car-service.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private carService:CarServiceService) { }

  carDetails : CarDetail[] = [];

  ngOnInit(): void {
    this.getCarDetail();
  }

  getCarDetail() {
    this.carService.getCarDetail().subscribe(response => {
      this.carDetails = response.data;
    });
  } 

}