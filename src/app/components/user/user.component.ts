import {Component}  from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { authenticationService } from '../../services/authentication.service';
import { UserLoginResponse } from "src/app/models/User/UserLoginResponse";
import { userService } from '../../services/user.service';
import { AppUser}  from "../../models/User/AppUser";
import { UserInfo } from "src/app/models/User/UserInfo";

@Component({
    selector : 'user-page',
    templateUrl: 'user.component.html',
    styleUrls : ['user.component.css'],
    providers : [userService, authenticationService],
})

export class UserComponent { 

    users:Array<AppUser>;
    userId:string;
    public token:string="";
    public userResponse: UserLoginResponse = new UserLoginResponse();

    constructor (private authdServ: authenticationService, private userServ: userService, public router: Router, private http: HttpClient) { }

    ngOnInit(){
        this.authdServ.UserInformation(this.getCurrentUser()).subscribe((data:UserInfo)=>this.userId=data.userLogin);
    }

    delUser(id : string){
        if (confirm('Уверены, что хотите удалить?')){
            this.userServ.delRecord(id).subscribe( );}
        this.getUsers();
    };

    getUsers(){
        this.userServ.getAllUser().subscribe((x:Array<AppUser>) => this.users = x );
    }

    getCurrentUser():string{
        return sessionStorage.getItem("currentUser");
    }
}