import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class reportService {

    private urlGet = "https://localhost:5001/api/Report?StartData=";

    constructor(private http: HttpClient) { }
    
    getRecordByTime(Start:Date, End:Date, userId:string) {
        return this.http.get(this.urlGet + Start + "&EndData=" + End +"&userId=" + userId);
    };
}



