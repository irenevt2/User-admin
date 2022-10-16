import { Component, EventEmitter, Input, OnInit, Optional, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() isModal = false;
  @Output() evento = new EventEmitter();

  username = "";
  password = "";

  formlogin : FormGroup = new FormGroup({
    username : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  constructor( 
    @Optional() private modalActivo:NgbActiveModal,
    private auth:AuthService
    ) { }

  ngOnInit(): void {
  }
  validar(){
    // console.log(this.formlogin)
    if(this.formlogin.valid){
      this.username = this.formlogin.value.username;
      this.password = this.formlogin.value.password;
      console.log(this.formlogin.value)

      if(this.username=="root" && this.password=="root"){
        // alert("Inicio de sesion");
        this.auth.user = {
            iduser: 1,
            foto: 'https://lh3.googleusercontent.com/a/ALm5wu0TIazKPe2SetN_H1Ff2bQSvmnJPcii6oWgxmYxTw=s576-p-rw-no',
            name: 'Irene',
            lastname: 'Vargas',
            rol: 'Administradora'
        }
        this.evento.emit({
          event:'inicio sesion',
          user: {
            
          }
        })
      }else{
        alert("Error en los datos")
      }
    }else{
      alert('revisar datos')
    }
  }

  cerrar(){
    this.modalActivo.close();
  }

}
