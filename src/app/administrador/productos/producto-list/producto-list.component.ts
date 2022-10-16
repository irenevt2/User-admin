import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductoDetalleComponent } from '../producto-detalle/producto-detalle.component';
import { ProductoFormComponent } from '../producto-form/producto-form.component';
import { Producto } from '../producto.interface';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.scss']
})
export class ProductoListComponent implements OnInit {

  productos : Producto[] = [];
  constructor(
    private modal:NgbModal
  ) { }

  ngOnInit(): void {
    this.productos.push({
      idproducto: 1,
      denominacion: "celular Xiaomi",
      precio_venta: 500,
      precio_compra: 420
    })
    this.productos.push({
      idproducto: 1,
      denominacion: "celular Huawei",
      precio_venta: 700,
      precio_compra: 610
    })
  }

  adicionar(){
    let ref =  this.modal.open(ProductoFormComponent)
    ref.componentInstance.isModal = true;
    ref.componentInstance.evento.subscribe((result:any)=>{
      if(result.event == "add"){
        this.productos.push(result.producto)
      }
    })
  }

  addProducto(params:any){
    if(params.event == "add"){
      this.productos.push(params.producto)
    }
  }

  mostrar_detalle(){
    this.modal.open(ProductoDetalleComponent)
  }
}
