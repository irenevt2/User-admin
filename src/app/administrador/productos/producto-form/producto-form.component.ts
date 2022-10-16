import { Component, EventEmitter, Input, OnInit, Optional, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.scss']
})
export class ProductoFormComponent implements OnInit {
  
  @Input() isModal = false;
  @Output() evento = new EventEmitter;

  form: FormGroup = new FormGroup({
    denominacion : new FormControl('', [Validators.required]),
    precio_compra: new FormControl('', [Validators.required]),
    precio_venta: new FormControl('', [Validators.required])
  });

  constructor(
    @Optional() private modalActivo:NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  guardar(){
    if(this.form.valid){
      this.evento.emit({
        event: 'add',
        producto: {
          idproducto: 2,
          ...this.form.value
        }
      })
      this.cerrar()
    }
  }
  cerrar(){
    this.modalActivo.close();
  }
}
