import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) {

   }
  getData() {

    return this.http.get('https://cors.io/?http://api.myglamapp.pl/api/categories?language=EN');

  }
}
