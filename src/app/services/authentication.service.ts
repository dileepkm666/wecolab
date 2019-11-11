import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

export class JwtResponse{
  constructor(
    public jwttoken:string,
     ) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }
  authenticate(username,password)
  {
    return this.httpClient.post<any>('http://localhost:8888/authenticate',{username,password}).pipe
    {
      map(userData =>{
        sessionStorage.setItem('username',username);
        let tokenStr='Bearer '+userData;
        sessionStorage.setItem('token',tokenStr);
        return userData;
      }
        )
    }
  }

  isUserLoggedIn()
  {
    let user=sessionStorage.getItem('username');
    if(user===null)
    {
      return false;
    }
    return true;
  }

  logOut()
  {
    sessionStorage.removeItem('username');
  }
}
