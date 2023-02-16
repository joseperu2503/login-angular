import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router
  ){}

  canActivate(): boolean{
    const isValidToken = this.tokenService.isValidToken()
    console.log('isValidToken',isValidToken)
    if(!isValidToken){
      this.router.navigate(['login'])
      return false
    }

    return true
  }
}
