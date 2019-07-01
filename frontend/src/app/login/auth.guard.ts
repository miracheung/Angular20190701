import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './user.models';
@Injectable()
export class AuthGuard implements CanActivate{


  constructor(private _authService:AuthService,private _router:Router){

  }
  canActivate(route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot):Observable<boolean>| Promise<boolean> | boolean{


      if(this._authService.isAuthenticated()){
        return true;
      }
      this._router.navigate(['login']);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }
}