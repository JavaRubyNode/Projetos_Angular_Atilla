import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean>|boolean {
    if (firebase.auth().currentUser) {
      return true;
    } else {
      return false;
    }
  }

}
