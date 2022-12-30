import { Component, Input, OnInit } from '@angular/core';
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
  brandForChildBool:Boolean = false;

  @Input() brandForChild : Brand;

  ngOnInit(): void {
    this.getBrands();
    //this.sendToParent(this.brands);
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
    console.log(this.brandForChild);
    this.toastrService.success("selected" , brand.name);
    this.currentBrand = brand;
    this.brandForChild = brand;
    this.brandForChildBool = true;
    console.log(this.brandForChild);
  }

  getAllBrandsByClass() {
    if (!this.currentBrand) {
      return "greyBackground";
    } else {
      return "";
    } 
  }

/*   @Output() brandToParent = new EventEmitter<Brand[]>();

  sendToParent(value: Brand[]) {
    this.brandToParent.emit(value);
  } */

}
