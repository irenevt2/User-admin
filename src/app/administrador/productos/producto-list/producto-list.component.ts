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
      precio_compra: 500,
      precio_venta: 420
    })
    this.productos.push({
      idproducto: 1,
      denominacion: "celular Huawei",
      precio_compra: 700,
      precio_venta: 810
    })
  }

  adicionar(){
    this.openForm(1, {})
    // let ref =  this.modal.open(ProductoFormComponent)
    // ref.componentInstance.isModal = true;
    // ref.componentInstance.evento.subscribe((result:any)=>{
    //   if(result.event == "add"){
    //     this.productos.push(result.producto)
    //   }
    // })
  }
  editar(producto:any){
    this.openForm(2, producto)
    // let ref =  this.modal.open(ProductoFormComponent)
    // ref.componentInstance.isModal = true;
    // ref.componentInstance.action = 2;
    // ref.componentInstance.item = producto;

    // ref.componentInstance.evento.subscribe((result:any)=>{
    //   if(result.event == "edit"){
    //     this.productos.forEach(val=>{
    //       if(val.idproducto == result.producto.idproducto){
    //         val.denominacion = result.producto.denominacion;
    //         val.precio_compra = result.producto.precio_compra;
    //         val.precio_venta = result.producto.precio_venta;
    //         return;
    //       }
    //     })
    //   }
    // })
  }

  eliminar(producto:any, index:number){
    this.productos.splice(index, 1)
  }

  openForm(accion = 1, producto:any){
    let ref =  this.modal.open(ProductoFormComponent)
    ref.componentInstance.isModal = true;

    ref.componentInstance.accion = accion;
    ref.componentInstance.item = producto;

    ref.componentInstance.evento.subscribe((result:any)=>{
      if( accion == 1 ){
        this.productos.push(result.producto)
      }else
      if( accion == 2 ){
        this.productos.forEach(val=>{
          if(val.idproducto == result.producto.idproducto){
            val.denominacion = result.producto.denominacion;
            val.precio_compra = result.producto.precio_compra;
            val.precio_venta = result.producto.precio_venta;
            return;
          }
        })
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
