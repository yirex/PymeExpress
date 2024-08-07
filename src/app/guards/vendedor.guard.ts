import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const vendedorGuard: CanActivateFn = (route, state) => {
  const toastr = inject(ToastrService)
  const router = inject(Router)
  const usuario = localStorage.getItem('usuario')
  const vendedor = localStorage.getItem('vendedor')

  if(usuario) {
    if(vendedor == 'true') {
      return true
    } else {
      toastr.error('No tienes permiso de vendedor')
      router.navigate([''])
      return false
    }
  } else {
    toastr.error('No puedes acceder a esta página, debes iniciar sesión')
    router.navigate(['/inicioSesion'])
    return false
  }
}
