import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { ValidaRolService } from './valida-rol.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  data:any;
  constructor(private validaRolService: ValidaRolService,
    private authService: AuthService,
    private router: Router
    ){
    }
      canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean{
          if(sessionStorage.getItem('user')){
            const user = JSON.parse(sessionStorage.getItem('user'));
            return (user.status)? true: false;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
     
     }
     
      }

