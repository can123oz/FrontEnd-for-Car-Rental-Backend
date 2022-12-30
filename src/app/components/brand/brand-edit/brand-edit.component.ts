import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandServiceService } from 'src/app/services/brand-service.service';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.css']
})
export class BrandEditComponent implements OnInit {

  constructor(private toestr:ToastrService, private brandService:BrandServiceService,
    private form:FormBuilder) { }

  updateTrigger:Boolean = false;
  brandForm:FormGroup;
  @Input() brand222: Brand;

  ngOnInit(): void {
    if (this.brand222.name) {
      this.updateTrigger = true;
    }
    this.createUpdateForm();
  }

  createUpdateForm() {
    this.brandForm = this.form.group({
      name:["",Validators.compose([
        Validators.required,
        Validators.minLength(2),
      ])]
    })
  }

  /* ,
  id:["",Validators.compose([
    Validators.required,
  ])] */

  updateBrand() {
    let brand : Brand = Object.assign({},this.brandForm.value);
    brand.id = this.brand222.id;
    console.log(brand);
    this.brandService.updateBrand(brand).subscribe(response => {
      if (response.success) {
        this.toestr.success("Successfuly Updated");
      }
    })
  }


}