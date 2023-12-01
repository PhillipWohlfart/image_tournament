// image.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private serverUrl = 'http://localhost:1234'; // replace with your server URL

  constructor(private http: HttpClient) {
  }

  getImages(): Observable<any> {
    return this.http.get<any>(`${this.serverUrl}/retrieve`);
  }

  getImageText(imageName: string): Observable<any> {
    return this.http.get<any>(`${this.serverUrl}/getImageText/${imageName}`);
  }
}
