import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
name:string;
  userName: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onLogout(){
    this.router.navigateByUrl('/login');
  }
  getUserName() {
    this.userName = localStorage.getItem('TOKEN');
    this.userName= this.userName.substring(0, this.userName.lastIndexOf("@"));
    this.userName= this.userName.toUpperCase();
    return this.userName;
  }
 
}
