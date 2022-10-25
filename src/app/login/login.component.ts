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

      this.auth.signIn(this.username, this.password).subscribe({
        next:(result:any) => {
          console.log(result)
          if(result.state == "failure"){
            alert(result.message)
          } else if(result.state == "success") {
            this.auth.user = result.user;
            this.evento.emit({
                  event:'inicio sesion',
                  user: result.user
            })
          }
        },
        error:(error:any) => {
          alert(error.message)
        }
      })
    }else{
    }
  }

  cerrar(){
    this.modalActivo.close();
  }

}
