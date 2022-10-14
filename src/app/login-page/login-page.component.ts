import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  // event: any;
  constructor(
    private router:Router,
    private modal:NgbModal
  ) { }

  ngOnInit(): void {
  }

  iniciarSesion(){
    let ref = this.modal.open(LoginComponent)
    ref.componentInstance.isModal = true;
    ref.componentInstance.evento.subscribe((params:any)=>{
      ref.close();
      this.evaluar(params)
    })
  }

  evaluar(params:any){
    console.log(params)
    if(params.event == "inicio sesion"){
      this.router.navigate(["administrador"])
    }
  }
}
