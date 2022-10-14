import { Component, EventEmitter, Input, OnInit, Optional, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
    @Optional() private modalActivo:NgbActiveModal 
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
        alert("Inicio de sesion");
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
