import {Component, OnInit}  from "@angular/core";
import { Router } from "@angular/router";
import { recordService } from "../../services/record.service";
import { Record } from "../../models/Record/Record"
import { NewRecord } from "src/app/models/Record/NewRecord";

@Component({
    selector : 'record-page',
    templateUrl: 'record.component.html',
    providers : [recordService],
})

export class RecordComponent implements OnInit {
    
    id: number=1;
    res: string="";
    record: Record;
    records:Array<Record>;
    theme: string='a';
    text: string='a';
    addRec:boolean=false;
    editRec:boolean=false;

    constructor(private recordServ: recordService, public router: Router){}
    
    ngOnInit(){
        this.recordServ.getAllRecord( this.getCurrentUser() ).subscribe((x:Array<Record>) => {this.records = x} );
    }

    getOneRecord(){
        this.recordServ.getOneRecord(this.id).subscribe(x => this.record = x);
    }

    addRecodrForm(){
        this.addRec=true;
    }

    escAddRecodrForm(){
        this.addRec=false;
    }

    addRecord() {
        var newRecord = new NewRecord(this.theme, this.text, this.getCurrentUser() );
        this.recordServ.addRecord(newRecord).subscribe();
        this.addRec=false;
    };

    editRecord(data : Record){
        localStorage.setItem("editRecord", JSON.stringify(data));
        this.router.navigate(['/record/edit']);
        //this.editRec=true;
        //this.http.get<Record>(this.url + id).subscribe( x => this.record = x);

    };

    delRecord(id : number){
        this.recordServ.delRecord(id).subscribe( );

    };

    getCurrentUser():string{
        return sessionStorage.getItem("currentUser");
    }



}