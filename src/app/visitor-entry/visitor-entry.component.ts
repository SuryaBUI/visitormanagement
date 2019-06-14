import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from "@angular/forms";
import { VmsService } from '../vms.service';
import {MatDialog} from '@angular/material';
//import { VisitorDialogComponent } from '../visitor-dialog/visitor-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';


export interface DialogData {
  id:number;
  visitorname:string;
  datein:string;
  dateout: string;
  purpose: string;
  poc: string;
  mobile:string;
  idnumber: string
}

@Component({
  selector: 'app-visitor-entry',
  templateUrl: './visitor-entry.component.html',
  styleUrls: ['./visitor-entry.component.css']
})
export class VisitorEntryComponent implements OnInit {
@ViewChild('f') entryForm: NgForm[];
visitorName:string;
dateIn:string;
dateOut:string;
purpose:string;
poc:string;
mobile:string;
idNumber:string;
animal: string;
  name: string;
  purposes: any;
  apiURL = './assets/visitor.json';
  constructor(private httpClient: HttpClient, private  visitorService:VmsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.visitorService.getPurposes().subscribe( (data : any[]) => {
      this.purposes= data;
      console.log("surya purposes  ........"+JSON.stringify(this.purposes));
    });
  }
 onSubmit(form: NgForm) : void{
  debugger;
  console.log(form.value.visitorname);
  const dialogRef = this.dialog.open(VisitorDialogComponent, {
    height: '300px',
    width: '700px',
    data: {name: form.value.visitorname, din: form.value.date , dout: form.value.out, purpose: form.value.purpose , poc:form.value.poc, idNumber: form.value.idnumber, mobile: form.value.mobile }
  });
  

   }
}


@Component({
  selector: 'app-visitor-dialog',
  templateUrl: './visitor-dialog.component.html',
  styleUrls: ['./visitor-entry.component.css']
})
export class VisitorDialogComponent{

  constructor( private router: Router, public dialogRef: MatDialogRef<VisitorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onHistory(){
    this.dialogRef.close();
    this.router.navigateByUrl('/dashboard/visitorHistory');
  }
}




