import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = {
    foto: 'https://lh3.googleusercontent.com/a/ALm5wu0TIazKPe2SetN_H1Ff2bQSvmnJPcii6oWgxmYxTw=s576-p-rw-no',
    name: 'Irene',
    lastname: 'Vargas',
    rol: 'Administradora'
  }

  constructor() { }
}