import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

export default class ResponseModel {
  statusCode?: number;
  headers?: any;
  body?: any;
}

@Injectable({
  providedIn: 'root'
})
export class TestService {

  // SERVICE_URL: string = 'https://yacop2d062.execute-api.us-east-2.amazonaws.com/Stage/api/categories';
  APIURL: string = environment.apiUrl; 

  constructor(private httpClient: HttpClient) { }

  greet(): Observable<ResponseModel> {
    // console.log(environment.apiUrl);
    return this.httpClient.get<ResponseModel>(this.APIURL);
  }

}
