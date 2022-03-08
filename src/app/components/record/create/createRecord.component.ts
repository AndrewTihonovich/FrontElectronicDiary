import { Router } from "@angular/router";
import {Component, OnInit}  from "@angular/core";
import { NewRecord } from "src/app/models/Record/NewRecord";
import { recordService } from "src/app/services/record.service";

@Component({
    selector : 'createRecord-page',
    templateUrl: 'createRecord.component.html',
    styleUrls: ['createRecord.component.css'],
    providers : [recordService],
})

export class CreateRecordComponent {

    theme: string='';
    text: string='';

    constructor(private recordServ: recordService, public router: Router){}
    
    createRecord(){
        var newRecord = new NewRecord(this.theme, this.text, sessionStorage.getItem("currentUser") );
        this.recordServ.addRecord(newRecord).subscribe();
        this.router.navigate(['/record']);
    }
}