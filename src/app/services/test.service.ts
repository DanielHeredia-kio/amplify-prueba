import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export default class ResponseModel {
  statusCode?: number;
  headers?: any;
  body?: any;
}

@Injectable({
  providedIn: 'root'
})
export class TestService {

  // SERVICE_URL: string = 'https://vu3cpov8r3.execute-api.us-east-2.amazonaws.com/desarrollo';
  SERVICE_URL: string = 'https://yacop2d062.execute-api.us-east-2.amazonaws.com/Stage/api/categories';

  constructor(private httpClient: HttpClient) { }

  greet(): Observable<ResponseModel> {
    return this.httpClient.get<ResponseModel>(this.SERVICE_URL);
  }

}
