import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment} from 'src/environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  adminLogin(data: any){
    return this.httpClient.post(environment.url + '/admin/adminLogin', data,{withCredentials: true})
  }
  
  
  Post<T>(apiEndPoint: string, data: unknown): Observable<T> {
    return this.httpClient.post<T>(environment.url + apiEndPoint, data);
  }

  PostById<T>(apiEndPoint: string, id: number, data: unknown):Observable<T>{
    return this.httpClient.post<T>(environment.url + apiEndPoint + `/${id}`, data);
  }

  Get<T>(apiEndPoint: string, queryParams?: unknown): Observable<T> {
    // let qp = this.utilityService.jsonToQueryString(queryParams)
    return this.httpClient.get<T>(environment.url + apiEndPoint )
  }

  GetById<T>(apiEndPoint: string, id: number, queryParams?: unknown): Observable<T> {
    // let qp = this.utilityService.jsonToQueryString(queryParams)
    return this.httpClient.get<T>(environment.url + apiEndPoint + `/${id}`)
  }

  Put<T>(apiEndPoint: string, data?: unknown) :Observable<T> {
    return this.httpClient.put<T>(environment.url + apiEndPoint, data);
  }

  PutById<T>(apiEndPoint: string, id: number, data: unknown):Observable<T> {
    return this.httpClient.put<T>(environment.url + apiEndPoint + `/${id}`, data)
  }

  Delete<T>(apiEndPoint: string, id: number):Observable<T> {
    return this.httpClient.delete<T>(environment.url + apiEndPoint + `/${id}`)
  }
}
