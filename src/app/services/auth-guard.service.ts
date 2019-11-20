import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate, CanActivateChild } from '@angular/router';
import { AboutComponent } from '../about/about.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate,CanDeactivate<AboutComponent>,CanActivateChild{

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    return true
  }

  canDeactivate(component:AboutComponent):boolean{
    alert("You are not allowed to go back!! ha ha haaa")
    return false
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    return true
  }
}
