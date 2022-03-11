import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserInfo } from "src/app/models/User/UserInfo";
import { authenticationService } from "src/app/services/authentication.service";
import { Record } from "../../models/Record/Record";
import { reportService } from "../../services/report.service";

@Component({
    selector: 'report-page',
    templateUrl: 'report.component.html',
    styleUrls: ['report.component.css'],
    providers : [reportService, authenticationService]
})
export class ReportComponent {
    timeStart:Date;
    timeEnd:Date;
    userId:string;
    sortUserId:string;
    records:Array<Record>;

    constructor(private authdServ: authenticationService, private reportServ: reportService, public router: Router, private http: HttpClient){}
   
    ngOnInit(){
        this.authdServ.UserInformation(this.getCurrentUser()).subscribe((data:UserInfo)=>this.userId=data.userLogin);
    }

    getCurrentUser():string{
        return sessionStorage.getItem("currentUser");
    }

    sort(Start:Date , End:Date){
        this.reportServ.getRecordByTime(Start, End, this.sortUserId ).subscribe((x:Array<Record>) => {this.records = x} );
        
    }
}