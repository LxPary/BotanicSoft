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
    this.plantAPI="/plantAPI/";
  }
  getUsers() {    
    return this.http.get('https://api.myjson.com/bins/w076v')
      .map(res => res.json())
  }
  getUserDetail(userID) {
    return this.http.get(this.plantAPI + "user/" + userID)
      .map(res => res.json())
  }
  getUserPlaylists(userID) {
    return this.http.get(this.plantAPI + "user/" + userID + "/playlists")
      .map(res => res.json())
  }
  getPlaylistSongs(playlistID) {
    return this.http.get(this.plantAPI + "playlist/" + playlistID + "/tracks")
      .map(res => res.json())
  }
}
