import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Record } from "../models/Record/Record";
import { EditRecord } from "../models/Record/EditRecord";
import { NewRecord } from "../models/Record/NewRecord";



@Injectable()
export class userService {

    private urlDelOne = "https://localhost:44375/api/User?id=";
    private urlAll = "https://localhost:44375/api/User/all";

    constructor(private http: HttpClient) { }
    
    getAllUser() {
        return this.http.get(this.urlAll);
    };
   /* 
    addRecord(data: NewRecord) {
        return this.http.post(this.urlAdd, data);
    };

    editRecord(editRecord: EditRecord) {
        return this.http.put(this.urlAdd, editRecord);
    };
   //**********/
    delRecord(id: string) {
        return this.http.delete(this.urlDelOne + id);
    };
}



