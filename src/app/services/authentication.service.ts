import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, of } from "rxjs";
import { UserLogin } from "../models/User/UserLogin";
import { UserRegistration } from "../models/User/UserRegistration";

@Injectable()
export class authenticationService {
    private urlLogin = "https://localhost:6001/api/login";
    private urlRegistr = "https://localhost:6001/api/registration";
    private urlUserInfo = "https://localhost:6001/api/user?userId=";

    constructor(private http: HttpClient) { }

    public Login(userLogin: UserLogin):Observable<any> {

        return this.http.post(this.urlLogin, userLogin);

    }

    public Registration(userRegistration: UserRegistration):Observable<any> {

        return this.http.post(this.urlRegistr, userRegistration);

    }

    public UserInformation(currentUser: string){
            
        return this.http.get(this.urlUserInfo+currentUser);

    }
}