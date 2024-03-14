import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RUTAS } from '../../core/enum/rutas.enum';
import { AutenticacionService } from '../../services/autenticacion/autenticacion.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

autenticacionService = inject(AutenticacionService)
  get RUTAS(){
    return RUTAS;
  }
  cerrarSesion(){
    this.autenticacionService.logout()
  }

}
