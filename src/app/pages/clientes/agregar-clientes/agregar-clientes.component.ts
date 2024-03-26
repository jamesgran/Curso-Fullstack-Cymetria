import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Cliente } from '../../../core/interfaces/cliente';
import { RouterLink } from '@angular/router';
import { ClientesService } from '../../../services/clientes/clientes.service';
import { ClienteModel } from '../../../core/models/cliente.model';

@Component({
  selector: 'app-agregar-clientes',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './agregar-clientes.component.html',
  styleUrl: './agregar-clientes.component.css',
})
export class AgregarClientesComponent {
  misClientes: Cliente[] = [];

  clienteForm = new FormGroup({

    nombre: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    tipoDocumento: new FormControl('', Validators.required),
    noDocumento: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    
  });

  constructor(private clienteService: ClientesService){}
  

  @Output() addCustomer: EventEmitter<Cliente> = new EventEmitter<Cliente>();

  crearCliente() {
    const clienteNuevo = this.clienteForm.value

    if(this.clienteForm.valid){//validar si el formulario fue llenado correctamente
     const data: ClienteModel = {
      nombre: clienteNuevo.nombre || "",
      telefono: clienteNuevo.telefono || "",
      email: clienteNuevo.email || "",
      tipoDocumento: clienteNuevo.tipoDocumento || "",
      noDocumento: clienteNuevo.noDocumento || "",
      direccion: clienteNuevo.direccion || ""
     }
     
     this.clienteService.crearClientes(data).subscribe({
      next: (res: any) => {
        console.log('Usuario creado', res)
      },
      error: (error: any) => {
        console.log('Error al crear el cliente', error)
      }
     })
    }

  }
}
