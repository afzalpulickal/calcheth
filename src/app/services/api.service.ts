import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  doGet(url: string, completed) {
    this.http.get(url).subscribe(
      (data) => completed(data),
      (error) => console.log("error"),
      () => console.log("completed")
    );
  }
}
