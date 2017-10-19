import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PlantServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PlantServiceProvider {
  public plantAPI: string;
  constructor(public http: Http) {
    this.plantAPI = "/plantAPI/";
  }
  getPlants() {
    return this.http.get(this.plantAPI + "all")
      .map(res => res.json())
  }
  searchPlants(item) {
    return this.http.get(this.plantAPI + "search/" + item)
      .map(res => res.json())
  }
  getPlant(Id) {
    return this.http.get(this.plantAPI + Id)
      .map(res => res.json())
  }
  createPlant(model: any) {
    return this.http.put(this.plantAPI, model)
      .map(res => res.json())
  }
  createUser(user: any) {
    return this.http.put(this.plantAPI + "user", user)
      .map(res => res.json())
  }
}
