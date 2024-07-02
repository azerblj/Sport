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
    return this.http.post<{ user:any }>(this.userUrl + "/inscription" ,obj);
  }
  login(obj:any)
  {
    return this.http.post<{ user:any }>(this.userUrl + "/signin" ,obj);
  }

}
