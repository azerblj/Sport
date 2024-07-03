import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl:string='http://localhost:3000/api/users';

  constructor(private http:HttpClient) { }

  signup(obj:any)
  {
    return this.http.post<{ isAdded:boolean }>(this.userUrl + '/signup',obj);
  }
  login(obj:any)
  {
    return this.http.post<{ msg:String,role:String}>(this.userUrl + '/login' ,obj);
  }

}
