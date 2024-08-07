import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const repartidorGuard: CanActivateFn = (route, state) => {
  const toastr = inject(ToastrService)
  const router = inject(Router);
  const usuario = localStorage.getItem('usuario')
  const rol2 = localStorage.getItem('repartidor')

  if(usuario && rol2 ){
    return true
  } else {
    toastr.error('No puedes acceder a esta página, debes iniciar sesión')
    router.navigate(['/'])
    return false 
  }

}
