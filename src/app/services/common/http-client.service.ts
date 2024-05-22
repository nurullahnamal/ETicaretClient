import { Inject, Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Action } from 'rxjs/internal/scheduler/Action';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpclient:HttpClient, @Inject("baseUrl") private baseUrl:string) { }

  private url(requestParameters : Partial<RequestParameters>):string{
    return `${requestParameters.baseUrl ? requestParameters.baseUrl : this.baseUrl}/${requestParameters.
      controller}${requestParameters.action ? `/${requestParameters.action}` : "" }`;
  }
  get<T>(requestParameters: Partial<RequestParameters>, id?: string):Observable<T>{
        let url:string="";
        if (requestParameters.fullEndPoint)
          url = requestParameters.fullEndPoint;
        else
          url = `${this.url(requestParameters)}${id ? `/${id}` : ""}${requestParameters.queryString ? `?${requestParameters.queryString}` : ""}`;

        return this.httpclient.get<T>(url,{headers:requestParameters.headers});
    }

  post<T>(requestParameter: Partial<RequestParameters>, body: Partial<T>): Observable<T> {
    let url: string = "";
    if (requestParameter.fullEndPoint)
      url = requestParameter.fullEndPoint;
    else
      url = `${this.url(requestParameter)}${requestParameter.queryString ? `?${requestParameter.queryString}` : ""}`

    return this.httpclient.post<T>(url, body, { headers: requestParameter.headers });
  }

  put<T>(requestParameters: Partial<RequestParameters>, body: Partial<T>): Observable<T>{
    let url : string="";
    if (requestParameters.fullEndPoint)
      url = requestParameters.fullEndPoint;
    else
      url = `${this.url(requestParameters)}${requestParameters.queryString ? `?${requestParameters.queryString}` : ""}`;
    return this.httpclient.put<T>(url, body, { headers: requestParameters.headers });


    }

  delete<T>(requestParameters: Partial<RequestParameters>, id: string): Observable<T> {
    let url: string = "";
    if (requestParameters.fullEndPoint)
      url = requestParameters.fullEndPoint;
    else
      url = `${this.url(requestParameters)}${id}${requestParameters.queryString ? `?${requestParameters.queryString}` : ""}`;
    return this.httpclient.delete<T>(url, { headers: requestParameters.headers });
  }





}
export class RequestParameters{
  controller?:string;
  action?:string;
  queryString?:string;

  headers?:HttpHeaders;
  baseUrl?:string;
  fullEndPoint?:string;
}
