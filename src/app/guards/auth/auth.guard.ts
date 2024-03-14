import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AutenticacionService } from '../../services/autenticacion/autenticacion.service';
import { tap } from 'rxjs';
import { RUTAS } from '../../core/enum/rutas.enum';

export const authGuard: CanActivateFn = (route, state) => {
  const autenticacionService = inject(AutenticacionService);
  const router = inject(Router);

  return autenticacionService.validarToken().pipe(
    tap((isAutenticado) => {
      if (!isAutenticado) {
        router.navigateByUrl(RUTAS.AUTENTICACION);
      }
    })
  );
  
};
