import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css']
})
export class ColorUpdateComponent implements OnInit {

  constructor(private colorService:ColorService, private toestr : ToastrService,
    private form : FormBuilder) { }

  @Input() incomingColor:Color;
  updateColor : FormGroup;
  updateTrigger: Boolean = false;

  ngOnInit(): void {
    console.log("child a gelen color : ", this.incomingColor);
    if (this.incomingColor) {
      this.updateTrigger = true;
      this.updateForm();
    }
  }

  updateForm() {
    this.updateColor = this.form.group({
      name:["",Validators.compose([
        Validators.required,
        Validators.minLength(2),
      ])]
    })
  }

  updateColorWithApi() {
    let color : Color = Object.assign({},this.updateColor.value);
    color.id = this.incomingColor.id;
    this.colorService.updateColor(color).subscribe( response => {
      if (response.success) {
        this.toestr.success("successfuly updated");
      } else {
        this.toestr.error("erorrrr");
      }
    })
  }
  

}
