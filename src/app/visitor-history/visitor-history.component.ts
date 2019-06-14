import { Component, OnInit } from '@angular/core';
import { VmsService } from '../vms.service';

@Component({
  selector: 'app-visitor-history',
  templateUrl: './visitor-history.component.html',
  styleUrls: ['./visitor-history.component.css']
})
export class VisitorHistoryComponent implements OnInit {
  visitor: any;


  key: string ; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  p: number = 1;
  constructor(private services: VmsService) { }

  ngOnInit() {
    this.services.getVisitors().subscribe( (data : any[]) => {
      this.visitor= data;
      console.log("surya history  ........"+JSON.stringify(this.visitor));
    });
  }

}
