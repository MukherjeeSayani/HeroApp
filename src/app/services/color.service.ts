import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IColor } from '../interfaces/icolor';
import { IVehicle, RootObject } from '../interfaces/ivehicle';

@Injectable({
  providedIn: 'root'
})
// Singletone -> let colorService = new ColorService()
export class ColorService implements OnDestroy {
  color = new BehaviorSubject<any>(null)
  constructor(private httpClient : HttpClient) {

   }
  ngOnDestroy(): void {
    this.color.unsubscribe();
  }

  getRandomColor<T>(size: number = 0): Observable<T>{
    let url = `https://random-data-api.com/api/color/random_color`;
    const finalUrl = size ? `${url}?size=${size}` : url;
   return this.httpClient.get<T>(finalUrl);
  }

  // IColor -> IColor[]

  getRandomVehicle(): Observable<IVehicle> {
    const url = "https://random-data-api.com/api/vehicle/random_vehicle"
    return this.httpClient.get<IVehicle>(url);
  }

  getRandomHero(id: string): Observable<RootObject> {
    const url = "https://www.superheroapi.com/api.php/5067740473254507/"+id;
    return this.httpClient.get<RootObject>(url);
  }
}

/*
 public class ClassModel {
  id: int;
  data: String;
}

class MyOwnClass {
  public ClassModel classModel;
}

main() {
 var myOwnClass = new MyOwnClass();
 var printMe = myOwnClass.classModel.id; NPE
 sysout(printMe) => Print 1, Data
}
*/
