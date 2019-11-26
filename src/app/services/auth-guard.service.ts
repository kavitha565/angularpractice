import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate, CanActivateChild, CanLoad } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate,CanDeactivate<AboutComponent>,CanActivateChild,CanLoad{

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

  canLoad(route:Route):boolean{ //It is used to prevent the application from loading a lazy loaded module if the user is unauthorized
    return true
  }
}
