import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, of } from "rxjs";
import { UserLogin } from "../models/User/UserLogin";

@Injectable()
export class authenticationService {
    private urlLogin = "https://localhost:44375/api/login";

    constructor(private http: HttpClient) { }

    public Login(userLogin: UserLogin):Observable<any> {

        return this.http.post(this.urlLogin, userLogin);

    }
}