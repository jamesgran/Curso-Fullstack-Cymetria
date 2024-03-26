import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginInterface } from '../../core/interfaces/login-interface';
import { environment } from '../../../environments/environment';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { UsuarioModel } from '../../core/models/usuario.model';
import { error } from 'console';
import { RUTAS } from '../../core/enum/rutas.enum';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  usuario: UsuarioModel;
  
  constructor(private httpClient: HttpClient, private router: Router) {}

  get token(): string{
    return localStorage.getItem('token') || "";
  }

  validarToken(): Observable<boolean>{
    return this.httpClient.get(`${base_url}/auth`,{
      headers: {
        'x-token': this.token,
      }
    }).pipe(
      map((resp: any) =>{
        const {
          _id,
          nombre,
          mail,
          tipoDocumento,
          noDocumento,
          login,
          password,
          rol,
          estado,
          createdAt,
        } = resp.usuario;

        this.usuario = new UsuarioModel(
          _id,
          nombre,
          mail,
          tipoDocumento,
          noDocumento,
          login,
          password,
          rol,
          estado,
          createdAt,
        );
        localStorage.setItem('token', resp.token)
        return true
      }), 
      catchError((error) =>{
        console.error(error)
        return of(false)
      })
    )
  }

  login(login: LoginInterface) {
    return this.httpClient.post(`${base_url}/auth`, login).pipe(
      //pipe permite unir otra funcion o encadenar el tap
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
        this.router.navigateByUrl('login')
      })
    );
  }

  logout() {
    localStorage.removeItem('token');//en vez de guardar elimina todo lo que se llame token
    this.router.navigateByUrl(RUTAS.AUTENTICACION)
  }
}
