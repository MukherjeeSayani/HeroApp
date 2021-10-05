import { IColor } from './../interfaces/icolor';
import { BehaviorSubject } from 'rxjs';
import { ColorService } from './../services/color.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ColorModel } from '../models/color-model';

@Component({
  selector: 'app-my-own-color',
  templateUrl: './my-own-color.component.html',
  styleUrls: ['./my-own-color.component.scss']
})
export class MyOwnColorComponent implements OnInit, OnChanges {
  colorData?: ColorModel
  constructor(public colorService: ColorService) { }

  ngOnInit(): void {
    this.colorService.color.subscribe(data => {
      if(data){
        this.colorData = data
      }
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  refresh(){
    this.fetchNewColor();
  }

  fetchNewColor() {
    this.colorService.getRandomColor<IColor>().subscribe(data => {
      console.log(data)
      if(data){
        let colorData = new ColorModel(data.id, data.uid, data.hex_value, data.color_name);
        this.colorService.color.next(colorData)
      }
    })
  }
}
