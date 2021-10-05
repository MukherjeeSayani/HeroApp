import { Location } from '@angular/common';
import { AfterViewChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IColor } from '../interfaces/icolor';
import { ColorModel } from '../models/color-model';
import { ColorService } from '../services/color.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit, AfterViewChecked {
  colorData: ColorModel[]
  logId = 0
  constructor(public colorService: ColorService,
    private location: Location) {
    this.colorData = new Array<ColorModel>()
   }

  ngAfterViewChecked(): void {
    console.log(this.logId+=1)
  }


  ngOnInit(): void {
    this.colorService.color.subscribe(data => {
      if(data instanceof Array && data){
        this.colorData = data
      } else if (data) {
        this.colorData.push(data)
      }
    })
    this.fetchNewColor();
  }

  fetchNewColor() {
    this.colorService.getRandomColor<IColor[]>(5).subscribe(data => {
      if(data){
        this.colorData = data
      }
    })
  }

  goBack() {
    this.location.back()
  }
}
