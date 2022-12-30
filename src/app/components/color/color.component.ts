import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})

export class ColorComponent implements OnInit {

  colors: Color[]=[];
  currentColor : Color;
  colorForChild:Color;

  constructor(private ColorService:ColorService, private toastrService : ToastrService,
    private cdr:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.ColorService.getAllColor().subscribe( response => {
      this.colors = response.data;
    })
  }

  setCurrentColor(color:Color) {
    this.currentColor = color;
    this.colorForChild = color;
    this.toastrService.success("Color Selected", color.name);
  }

  getCurrentColor(color : Color) {
    if (color == this.currentColor) {
      return "greyBackground";
    } else {
      return "";
    }
  }

  bindColor(color:Color) {
    console.log(color);
    this.colorForChild = color;
    console.log(this.colorForChild);
    this.cdr.detectChanges();
  }




}