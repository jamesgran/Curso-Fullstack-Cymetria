import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../core/interfaces/cliente';
import Swal from 'sweetalert2';
import { AgregarClientesComponent } from '../agregar-clientes/agregar-clientes.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ClientesService } from '../../../services/clientes/clientes.service';
import { Router } from '@angular/router';
import { RUTAS } from '../../../core/enum/rutas.enum';


@Component({
  selector: 'app-ver-clientes',
  standalone: true,
  templateUrl: './ver-clientes.component.html',
  styleUrl: './ver-clientes.component.css',
  imports: [AgregarClientesComponent, SweetAlert2Module],
})
export class VerClientesComponent implements OnInit {
  misClientes: Cliente[] = [];
  showMenu: boolean = false;

  constructor(private clienteService: ClientesService, private router: Router){

  }


  ngOnInit(): void {
    this.clienteService.getClientes().subscribe((data: any) => {
      console.log(data);
      this.misClientes = data.clientes;
    })




  }

  eliminarCliente(idCliente: number): void {
    this.misClientes = this.misClientes.filter(
      (cliente) => cliente._id !== idCliente
    );

    console.log('Eliminar', this.misClientes);
  }

  crearCliente(): void {
    this.router.navigateByUrl(RUTAS.ADD_CLIENTES)

  }
  getData(newcustomer:Cliente): void{
    this.misClientes.push(newcustomer)
    console.log(this.misClientes)
  }

}
