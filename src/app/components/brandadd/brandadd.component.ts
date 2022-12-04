import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandServiceService } from 'src/app/services/brand-service.service';

@Component({
  selector: 'app-brandadd',
  templateUrl: './brandadd.component.html',
  styleUrls: ['./brandadd.component.css']
})
export class BrandaddComponent implements OnInit {

  constructor(private brandService:BrandServiceService, private formBuilder:FormBuilder,
    private toestr : ToastrService) { }

  brandForm : FormGroup;

  ngOnInit(): void {
    this.createBrandAddForm();
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
    let brand = this.brandForm.value;
    if (this.brandForm.valid) {
      this.brandService.addBrand(brand).subscribe(response => {
        console.log(response.message);
        this.toestr.success("Brand Added", brand.name);
      },errorResponse => {
        this.toestr.error(errorResponse.message);
      });      
    }

  }


}