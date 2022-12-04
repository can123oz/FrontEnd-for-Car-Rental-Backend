import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { CarServiceService } from 'src/app/services/car-service.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  constructor(private carService : CarServiceService, 
    private activatedRoute : ActivatedRoute, private rentalServie : RentalService,
    private toestr : ToastrService) { }

  carStatus : boolean = false;
  carId : number;
  carImages : CarImage[];
  carDetails : CarDetail;
  imageLoaded : boolean = false;
  userId : number;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params["carId"]);
      this.getCarDetailById(params["carId"])
      this.getCarImagesById(params["carId"])
      this.carId = params["carId"];
      this.getCarStatus(this.carId);
    })
    this.userId = Math.floor(Math.random() * 100);
  }

  getCarDetailById(carId : Number) {
    this.carService.getCarDetailById(carId).subscribe( response => {
      //console.log("car details response : ",response);
      this.carDetails = response.data
    });
  }

  getCarImagesById(carId:Number) {
    this.carService.getCarImagesById(carId).subscribe( response => {
      //console.log(response)
      this.carImages = response.data
    });
  }

  getImageSrc(imagePath:String) : String {
    let path = "https://localhost:44349";
    return path+imagePath;
  }

  getImageClass(){
    if(this.imageLoaded==false){
      return 'carousel-item active';
    }else{
      return 'carousel-item'
    }
  }

  getCarStatus(carId:number) {
    this.rentalServie.getCarStatus(carId).subscribe( response => {
      this.carStatus = response;
    })
  }

  rentCar(carId:number,userId:number) {
    console.log("deneme");
    this.carService.rentCar(carId,userId).subscribe( response => {
      if (response.success) {
        this.carStatus = true;
        this.toestr.success("Car Returned", this.carDetails.carName);
      }
    });
  }

  returnCar(carId:number, userId:number) {
    this.rentalServie.returnCar(carId,userId).subscribe(response => {
      if (response.success) {
      this.carStatus = response.success;
      this.toestr.success("Car returned", this.carDetails.carName);
      }
    });
  }
}