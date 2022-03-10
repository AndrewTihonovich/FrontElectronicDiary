import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class userService {

    private urlDelOne = "https://localhost:6001/api/User?id=";
    private urlAll = "https://localhost:6001/api/User/all";

    constructor(private http: HttpClient) { }
    
    getAllUser() {
        return this.http.get(this.urlAll);
    };

    delRecord(id: string) {
        return this.http.delete(this.urlDelOne + id);
    };
}



