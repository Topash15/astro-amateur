import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  constructor(private http: HttpClient){
  }

  // private async request(method: string, url: string, data?: any){
  //   const result = this.http.request(method, url, {
  //       body: data,
  //       responseType: 'json',
  //       observe: 'body',
  //   })
  //   return result
  // }

  getPhotos():Observable<any>{
    return this.http.get<any>(`${environment.serverURL}/api/portfolio/get/photos`)
  }

  getPhotoById(id: Number): Observable<any>{
    return this.http.get<any>(`${environment.serverURL}/api/portfolio/get/photo/${id}`)
  }
}
