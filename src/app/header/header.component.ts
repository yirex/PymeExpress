import { Component } from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // Variables para el manejo del carro
  mostrarCarrito: boolean = false;

  constructor(
    public autenticacionServicio: AutenticacionService,
    private router: Router 
  ){}

  // Manejo del carro
  toggleCarrito(): void {
    this.mostrarCarrito = !this.mostrarCarrito;
  }

  receiveData(data: boolean): void {
    this.mostrarCarrito = false;
  }

  pymeProductos(): void {
    const id_pyme = this.autenticacionServicio.getPyme();
    if (id_pyme) {
      this.router.navigate(['/productos-pyme/' + id_pyme]);
    } else {
      console.error('Este usuario no es vendedor');
    }
  }

  repartidorOrdenes() {
    const id_rep = this.autenticacionServicio.getId()
    if (id_rep) {
      this.router.navigate(['/repartos/' + id_rep]);
    } else {
      console.error('Este usuario no es repartidor');
    }
  }

  cerrarSesion() {
    this.autenticacionServicio.cerrarSesion();
  }
}
