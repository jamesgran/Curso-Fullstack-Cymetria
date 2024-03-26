import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { VerClientesComponent } from './pages/clientes/ver-clientes/ver-clientes.component';
import { AgregarClientesComponent } from './pages/clientes/agregar-clientes/agregar-clientes.component';
import { AutenticacionComponent } from './auth/autenticacion/autenticacion.component';
import { authGuard } from './guards/auth/auth.guard';
import { VerUsuariosComponent } from './pages/usuarios/ver-usuarios/ver-usuarios.component';
import { AgregarUsuarioComponent } from './pages/usuarios/agregar-usuario/agregar-usuario.component';

export const routes: Routes = [
  {
    path: 'auth',
    title: 'Autenticacion',
    children: [
      {
        path: 'login',
        component: AutenticacionComponent,
      },
    ],
  },
  {
    path: 'home',
    title: 'Home',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        title: 'inicio',
        component: HomeComponent,
      },
      {
        path: 'servicio',
        title: 'Servicio',
        component: ServiciosComponent,
      },
      {
        path: 'acercade',
        title: 'Acerca de',
        component: AcercaDeComponent,
      },
      {
        path: 'contacto',
        title: 'contacto',
        component: ContactoComponent,
      },
      {
        path: 'clientes',
        title: 'Clientes',
        component: VerClientesComponent,
      },
      {
        path: 'add-cliente',
        title: 'Añadir Clientes',
        component: AgregarClientesComponent,
      },
      {
        path: 'usuarios',
        title: 'Ver Usuarios',
        component: VerUsuariosComponent,
      },
      {
        path: 'add-usuario',
        title: 'Añadir Usuarios',
        component: AgregarUsuarioComponent,
      },
    ],
  },
  {
    path: '**', //si no encuentra la ruta, redirecciona al login
    redirectTo: 'auth/login', 
    pathMatch: 'full'
  }
];
