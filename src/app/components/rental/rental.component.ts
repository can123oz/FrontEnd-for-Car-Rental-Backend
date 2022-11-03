import { transition } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RentalDetail } from 'src/app/models/rentalDetail';
import { Rental } from 'src/app/models/rentals';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  constructor(private RentalService:RentalService) { }

  rentals:RentalDetail[]=[];

  ngOnInit(): void {
    this.getRentalDetail();
  }

  getRentalDetail() {
    this.RentalService.getAllDetails().subscribe(response => {
      this.rentals = response.data;
    });
  }

}