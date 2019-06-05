import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITile } from './itile';

@Injectable({
  providedIn: 'root'
})
export class TileService {

  tileAPIURL:string = "http://demo5911200.mockable.io/tiles";

  tiles:Array<any>;
  constructor(private httpClient:HttpClient) { }

  getTiles():Observable<Array<ITile>>{

    return this.httpClient.get<Array<ITile>>(this.tileAPIURL);
  }

  getTile(Id:number):Observable<ITile>{

    return this.httpClient.get<ITile>(this.tileAPIURL + `/${Id}`);
  }
}
