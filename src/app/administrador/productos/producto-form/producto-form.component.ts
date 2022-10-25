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

  @Input() accion = 1; // 1 es para adicionar y 2 editar
  @Input() item:any;  

  form: FormGroup = new FormGroup({
    denominacion : new FormControl('', [Validators.required]),
    precio_compra: new FormControl('', [Validators.required]),
    precio_venta: new FormControl('', [Validators.required])
  });

  constructor(
    @Optional() private modalActivo:NgbActiveModal
  ) { }

  ngOnInit(): void {
    if(this.accion == 2){
      this.form.setValue({
        denominacion: this.item.denominacion,
        precio_compra: this.item.precio_compra,
        precio_venta: this.item.precio_venta
      })
    }
  }

  guardar(){
    if(this.form.valid){
      this.evento.emit({
        producto: {
          idproducto: (this.accion == 1) ? 3 : this.item.idproducto,
          denominacion: this.form.value.denominacion,
          precio_compra: this.form.value.precio_compra,
          precio_venta: this.form.value.precio_venta
          
          // ...this.form.value
        }
      })
      // if(this.action==1){
      //   this.evento.emit({
      //     producto: {
      //       idproducto: 2,
      //       ...this.form.value
      //     }
      //   })
      // }else{
      //   this.evento.emit({
      //     producto: {
      //       idproducto: this.item.idproducto,
      //       ...this.form.value
      //     }
      //   })
      // }
      if(this.isModal) 
      this.cerrar()
    }
  }
  cerrar(){
    this.modalActivo.close();
  }
}
