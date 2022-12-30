import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandServiceService } from 'src/app/services/brand-service.service';

@Component({
  selector: 'app-brandadd',
  templateUrl: './brandadd.component.html',
  styleUrls: ['./brandadd.component.css']
})

export class BrandaddComponent implements OnInit {

  constructor(private brandService:BrandServiceService, private formBuilder:FormBuilder,
    private toestr : ToastrService, private activatedRoutes : ActivatedRoute, private router: Router) { }

  brandForm : FormGroup;
  brand:Brand;
  numberdeneme :number;

  ngOnInit(): void {
    this.activatedRoutes.params.subscribe(params => {
      console.log(params);
      //if (params["id"]) {
        //this.getBrandById(5);
        /* this.numberdeneme = parseInt(params["id"]);
        this.getBrandById(this.numberdeneme);
        console.log("son adim this brand : ",this.brand);
        console.log("gelen ID : ",this.numberdeneme); */
      //} 
      this.createBrandAddForm();
    })
  }

  createBrandAddForm() {
    this.brandForm = this.formBuilder.group({
      name:["",Validators.compose([
        Validators.required,
        Validators.minLength(2),
      ])],
    });
  }

  addBrand() {
    //let brand = Object.assign({},this.brandForm.value);
    if (this.brandForm.valid) {
      let brand = this.brandForm.value;
        this.brandService.addBrand(brand).subscribe(response => {
          console.log(response.message);
          this.toestr.success("Brand Added", brand.name);
        },errorResponse => {
          this.toestr.error(errorResponse.message);
        });       
    }
  }

  getBrandById(brandId:Number) {
    this.brandService.getBrandById(brandId).subscribe(response => {
      if (response.success) {
        console.log("success blogu : ",response);
        //this.brand.id = response.data.id;
        this.brand = response.data;
      }
    })
  }

  updateBrand() {

  }

}