import { Observable } from 'rxjs/Observable';
import { CanDeactivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
 } from '@angular/router';
 import { NgForm } from '@angular/forms';

export interface CanComponentDeactivate {
    form: NgForm;
    canDeactivate: (form: NgForm) => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
            return component.canDeactivate(component.form);
        // throw new Error("Method not implemented.");
    }
}
