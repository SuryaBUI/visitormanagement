import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from './model/user';


@Injectable({
  providedIn: 'root'
})
export class VmsService {
  
  constructor(private http: HttpClient) { }

 getUser() : Observable<any>{
   return this.http.get('./assets/app.config.json').pipe(map(res => res ));
 }

 getVisitors() : Observable<any>{
  return this.http.get('./assets/visitor.json').pipe(map(res => res ));
}
 getPurposes(): Observable<any>{
  return this.http.get('./assets/purpose.json').pipe(map(res => res ));
}

 
  
}
