import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable, of } from "rxjs";
import { UserHelper } from "./user-helper";

@Injectable({
  providedIn: "root"
})
export class UserGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!UserHelper.isEditor()) {
      console.log("No es editor");
      // this.router.navigateByUrl("/");
      alert("No puedes acceder a esta URL");
      return of(false);
    }
    console.log("Es editor");
    return of(true);
  }
}
