import {Component}  from "@angular/core";
import { Router } from "@angular/router";
import { UserLoginResponse} from "../../models/User/UserLoginResponse";
import { authenticationService } from '../../services/authentication.service';

import { UserLogin } from "../../models/User/UserLogin";

@Component({
    selector : 'login-page',
    templateUrl: 'login.component.html',
    providers: [authenticationService]
})

export class LoginComponent { 
    public email : string = "asd@asd.asd";
    public password : string = "AsdQwe!23";
    public token:string="";
    public userResponse: UserLoginResponse = new UserLoginResponse();
    
    constructor(private loginServ: authenticationService, public router: Router) {}
    
    submitLogin(){
        
        var user = new UserLogin( this.email, this.password);
        this.loginServ.Login(user).subscribe(data => {
        if  (data.result !==null)
            {
                console.log("User AUTH");

                sessionStorage.setItem("currentUserToken", data.token);
                sessionStorage.setItem("currentUser", data.displayName);
            
                this.router.navigate(['/record']);
            }
            else {
                console.log("User NOT auth");
            }
        });
    }
}