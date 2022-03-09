import {Component}  from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserRegistration}  from "../../models/User/UserRegistration";
import { Router } from "@angular/router";
import { authenticationService } from '../../services/authentication.service';
import { UserLoginResponse } from "src/app/models/User/UserLoginResponse";

@Component({
    selector : 'registration-page',
    templateUrl: 'registration.component.html',
    providers: [authenticationService]
})

export class RegistrationComponent { 
    firstName: string = "123";
    lastName: string = "123";
    userNameLogin: string = "123";
    email: string = "123@123.123"
    phone: string = "343435";
    password: string = "!23QweAsd";
    public token:string="";
    public userResponse: UserLoginResponse = new UserLoginResponse();

    constructor (private loginServ: authenticationService, public router: Router, private http: HttpClient) { }

    registrationUser(){
        var user = new UserRegistration(this.firstName, this.lastName, this.userNameLogin, this.email, this.phone, this.password );
        this.loginServ.Registration(user).subscribe(data => {
            
            if  (data.result!==null)
            {
                console.log("User AUTH after Registration");

                sessionStorage.setItem("currentUserToken", data.token);
                sessionStorage.setItem("currentUser", data.displayName);
                
                this.router.navigate(['/record']);
            }
            else{
                console.log("User NOT auth after Registration");
                }
        });
    }
}