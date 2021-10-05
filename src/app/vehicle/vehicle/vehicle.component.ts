import { RootObject } from './../../interfaces/ivehicle';
import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  hero?: RootObject
  constructor(private colorService: ColorService,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      let id = `${params.id}`;
      this.colorService.getRandomHero(id).subscribe(data => this.hero = data)
    });

  }

}
