import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Record } from "../../models/Record/Record";
import { reportService } from "../../services/report.service";

@Component({
    selector: 'report-page',
    templateUrl: 'report.component.html',
    styleUrls: ['report.component.css'],
    providers : [reportService]
})
export class ReportComponent {
    timeStart:Date;
    timeEnd:Date;
    userId:string;
    records:Array<Record>;

    constructor(private reportServ: reportService, public router: Router, private http: HttpClient){}
   
    sort(Start:Date , End:Date){
        this.reportServ.getRecordByTime(Start, End, this.userId ).subscribe((x:Array<Record>) => {this.records = x} );
        
    }
}