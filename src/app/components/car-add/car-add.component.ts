import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarServiceService } from 'src/app/services/car-service.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  constructor(private toestr:ToastrService, private carService : CarServiceService,
    private form : FormBuilder) { }

  carForm : FormGroup;

  ngOnInit(): void {
    this.createForm()
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
    })
  }


  

}