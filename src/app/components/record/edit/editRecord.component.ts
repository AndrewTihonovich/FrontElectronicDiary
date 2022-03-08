import {Component, OnInit}  from "@angular/core";
import { Router } from "@angular/router";
import { EditRecord } from "src/app/models/Record/EditRecord";
import { Record } from "src/app/models/Record/Record";
import { recordService } from "src/app/services/record.service";

@Component({
    selector : 'editRecord-page',
    templateUrl: 'editRecord.component.html',
    styleUrls : ['editRecord.component.css'],
    providers : [recordService],
})

export class EditRecordComponent implements OnInit {

    id:number=0;
    theme: string='';
    text: string='';
    record:Record;

    constructor(private recordServ: recordService, public router: Router){}

    ngOnInit(): void {
        var data=localStorage.getItem("editRecord");
        this.record = JSON.parse(data);

        this.id=this.record.id;
        this.theme=this.record.theme;
        this.text=this.record.text;
    }
    
    editRecord(){
        var newRecord = new EditRecord(this.id, this.theme, this.text, sessionStorage.getItem("currentUser") );
        this.recordServ.editRecord(newRecord).subscribe();
        this.router.navigate(['/record']);
    }
}