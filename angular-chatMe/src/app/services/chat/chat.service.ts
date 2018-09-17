import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ChatService {

   baseURL: string = "https://api.dialogflow.com/v1/query?v=20150910";
   token: string = "63db21b6d636493ebd96662f21c3206d";

  constructor(private http: Http){}

  public sendMessage(query: string){
    let data = {
      query : query,
      lang: 'en',
      sessionId: '1234567'
    }
    let headers = new Headers();
    headers.append('Authorization', 'Bearer'+ this.token);

    return this.http.post(this.baseURL, data, {headers : headers}).map(res => {
      res.json()
    })

  }
