import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User = {
    iduser: 0,
    apellidos_persona: "",
    cargo: "",
    imgUrl: "",
    nombre_persona: "",
    password: "",
    username: ""
  }
  
  constructor(
    private http:HttpClient
  ) { }
  
  signIn(username:any, password:any){
    return this.http.post(environment.BACKEND+"/auth/signin",{
      username : username,
      password : password
    })
  }

}
