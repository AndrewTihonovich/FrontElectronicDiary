import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Record } from "../models/Record/Record";
import { EditRecord } from "../models/Record/EditRecord";
import { NewRecord } from "../models/Record/NewRecord";



@Injectable()
export class recordService {

    private urlGet = "https://localhost:44319/api/Record?Id=";
    private urlAll = "https://localhost:44319/api/Record/all?userId=";
    private urlAdd = "https://localhost:44319/api/Record";

    constructor(private http: HttpClient) { }
    
    getOneRecord(id: number) {
        return this.http.get<Record>(this.urlGet + id);
    };

    getAllRecord(currentUser: string) {
        return this.http.get(this.urlAll + currentUser);
    };

    addRecord(data: NewRecord) {
        return this.http.post(this.urlAdd, data);
    };

    editRecord(editRecord: EditRecord) {
        return this.http.put(this.urlAdd, editRecord);
    };

    delRecord(id: number) {
        return this.http.delete(this.urlGet + id);
    };
}



