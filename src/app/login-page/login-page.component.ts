import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm  } from "@angular/forms";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { VmsService } from '../vms.service';
import { AuthServices } from '../auth-services';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
password:string;
name:string;
arrVisitors: string [];
visitor: any;
loginForm : FormGroup;


  constructor(private router: Router, private services: VmsService,  private authService: AuthServices) {

   }
error:string;
  ngOnInit() {
    this.loginForm = new FormGroup({
      'userData': new FormGroup({
         'username' : new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, [Validators.required, Validators.minLength(8)])
      })
    });
    this.services.getUser().subscribe( (data : any[]) => {
      this.visitor= data;
      console.log("surya is  ........"+JSON.stringify(this.visitor));
    });
    
  }

  onSubmit(form : NgForm){
    this.name= form.value.userData.username;
    this.password= form.value.userData.password;
    //console.log("ddD"+JSON.stringify(this.visitor.username));

  for (let data of this.visitor) {
    if (this.name == data.username && this.password== data.password){
      this.router.navigateByUrl('/dashboard');
      this.authService.login(this.name);
    } else {
      this.error = "Wrong Credentials";
    }
  }
  }
}
