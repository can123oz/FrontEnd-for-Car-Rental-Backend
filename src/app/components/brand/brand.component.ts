import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandServiceService } from 'src/app/services/brand-service.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor(private brandService:BrandServiceService, private toastrService:ToastrService) { }

  brands:Brand[]=[];
  currentBrand: Brand;

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
    })
  }

  getCurrentBrand(brand : Brand) {
    if (brand == this.currentBrand) {
      return "greyBackground";
    } else {
      return "";
    }
  } 

  setCurrentBrand(brand : Brand) {
    this.toastrService.success("selected" , brand.name);
    this.currentBrand = brand;
  }

  getAllBrandsByClass() {
    if (!this.currentBrand) {
      return "greyBackground";
    } else {
      return "";
    } 
  }


}
