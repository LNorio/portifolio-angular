import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class HobbiesService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost:3000";

  getDetails(id: Number){
    return this.http.get<any>(`${this.url}/hobbies/${id}`);
  }
}
