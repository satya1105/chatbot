import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyGptService {
  private apiUrl = 'https://api.mygpt.com/v1/messages'; // Replace with actual MyGPT API URL

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<any> {
    const payload = {
      text: message
    };
    return this.http.post<any>(this.apiUrl, payload);
  }
}
