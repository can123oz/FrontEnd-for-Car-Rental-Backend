import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  constructor(private colorService:ColorService, private toestr:ToastrService,
    private form : FormBuilder) { }

  colorForm : FormGroup;

  ngOnInit(): void {
    this.createColorForm();
  }

  createColorForm() {
    this.colorForm = this.form.group({
      name:["",Validators.compose([
        Validators.required,
        Validators.minLength(2),
      ])],
    })
  }

  addColor() {
    if (this.colorForm.valid) {
      let color = this.colorForm.value;
      this.colorService.addColor(color).subscribe( response => {
        console.log(response);
        this.toestr.success("Color Added",color.name);      
      }, errorResponse => {
        console.log(errorResponse);
        this.toestr.error("Cant Add right now");
      });  
    }
  }
}
