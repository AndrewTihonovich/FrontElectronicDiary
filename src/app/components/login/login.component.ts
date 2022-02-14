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
        this.loginServ.Login(user).subscribe( data => this.userResponse=data )
        this.token=this.userResponse.token;
        console.log("token=" + this.userResponse.token);

        if  (this.userResponse.token==null)
        {
            console.log("User NOT auth");
        }
        else{
            console.log("User AUTH");

            sessionStorage.setItem("currentUserToken", this.userResponse.token);
            sessionStorage.setItem("currentUser", this.userResponse.displayName);
            
            this.router.navigate(['/record']);
        }
    }
}