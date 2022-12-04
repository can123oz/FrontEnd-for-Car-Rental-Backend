import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandServiceService } from 'src/app/services/brand-service.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css']
})
export class CarFilterComponent implements OnInit {
  
  myForm : FormGroup;
  selectedBrand : Brand;
  selectedColor : Color;
  brands : Brand[];
  colors : Color[];

  @Output() colorSender = new EventEmitter<Color>();
  @Output() brandSender = new EventEmitter<Brand>();

  constructor(private colorService : ColorService, private brandService : BrandServiceService,
    private fb : FormBuilder) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.myForm = this.fb.group({
      color : [
        '',
        Validators.compose([
          Validators.required,
        ])
      ],
      brand : [
        '',
        Validators.compose([
          Validators.required,
        ])
      ],
    })
  }

  getColors() {
    return this.colorService.getAllColor().subscribe(params => this.colors = params.data);
  }

  getBrands() {
    return this.brandService.getBrands().subscribe(params => this.brands = params.data);
  }

  getFilteredCars() {
    this.colorSender.emit(this.selectedColor);
    this.brandSender.emit(this.selectedBrand);
  }
}
