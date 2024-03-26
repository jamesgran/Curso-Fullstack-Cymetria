import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios/usuarios.service';
import { Subscription } from 'rxjs';
import { UsuarioModel } from '../../../core/models/usuario.model';
import Swal from 'sweetalert2';
import { AutenticacionService } from '../../../services/autenticacion/autenticacion.service';
import { config } from '../../../../environments/configuracion/config';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RUTAS } from '../../../core/enum/rutas.enum';

@Component({
  selector: 'app-ver-usuarios',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ver-usuarios.component.html',
  styleUrl: './ver-usuarios.component.css',
})
export class VerUsuariosComponent implements OnInit, OnDestroy {
  usuarioSubscription: Subscription;
  usuarios: UsuarioModel[] = [];
  usuarioLogin: UsuarioModel;
  roles = config.roles //object.values trae los valors del objeto y los guarda enuna lista

  constructor(private usuarioService: UsuariosService, private autenticacionService: AutenticacionService, private router: Router) {}

  ngOnInit(): void {
    this.usuarioLogin = this.autenticacionService.usuario
    this.cargarUsuarios();
  }

  ngOnDestroy(): void {
    this.usuarioSubscription?.unsubscribe()//se deja opcional por si en algun caso no ocurre la subscripcion 
  }

  cargarUsuarios() {
    this.usuarioSubscription = this.usuarioService
      .getUsuarios()
      .subscribe((res: any) => {
        this.usuarios = res.usuarios;
      });
  }

  eliminarUsuario(id: string){

    if(id === this.usuarioLogin._id){//no se puede eliminar el usuario logueado
      Swal.fire('Error!', 'No se puede eliminar este usuario', 'error')
    }else{
      this.usuarioService.eliminarUsuario(id).subscribe((res: any) =>{
        //TODO implementar esta funcion en el proyecto
        this.cargarUsuarios();//se vuelve a llamar para actualizar la tabla
        Swal.fire('eliminado', `Se elimino el usuario ${res.usuarioEliminado.nombre}`, 'success')
      })

    }
  }
  crearUsuario(){
    this.router.navigateByUrl(RUTAS.ADD_USUARIO)
    

  }
  actualizarRol(usuario: UsuarioModel){
    this.usuarioService.actualizarUsuario(usuario).subscribe((res: any) =>{
  
      this.cargarUsuarios();//se vuelve a llamar para actualizar la tabla
        Swal.fire('Actualizado', `Se actualizo el usuario ${res.usuarioActualizado.nombre}`, 'success')
    })

  }
}
