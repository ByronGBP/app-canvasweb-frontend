import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl + '/paintings';

@Injectable()
export class PaintingService {

  private requestOptions: RequestOptions;

  constructor(private http: Http) {
    this.requestOptions = new RequestOptions({withCredentials: true})
   }

   handleError(e) {
     return Observable.throw(e.json().error);
   }

   getPaintings(){
     return this.http.get(`${apiUrl}`, this.requestOptions)
      .map(res => res.json())
      .catch(this.handleError);
   }

   editPainting(painting){
     return this.http.post(`${apiUrl}/${painting.id}`, painting, this.requestOptions)
      .map(res => res.json())
      .catch(this.handleError);
   }

   createPainting(painting) {
     return this.http.post(`${apiUrl}`, painting, this.requestOptions)
       .map(res => res.json())
       .catch(this.handleError);
   }

   getPaintingWithId(id){
     return this.http.get(`${apiUrl}/${id}`, this.requestOptions)
      .map(res => res.json())
      .catch(this.handleError);
   }
}
