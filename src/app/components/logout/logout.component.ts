import {Component}  from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector : 'logout-page',
    templateUrl: 'logout.component.html',
})

export class LogoutComponent { 

    constructor(public router: Router) {}
    
    LogOut(){
            sessionStorage.removeItem("currentUserToken");
            sessionStorage.removeItem("currentUser");
            this.router.navigate(['/login']);
    }
}