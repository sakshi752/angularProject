import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  username: string = ''; 
  password: string = '';

  constructor(public userAuthService:UserAuthService) { }

  ngOnInit(): void {
  }

  login(){
    if (this.username==="" || this.password==="") {
      alert("please enter username and password")
    }
    else{
      this.userAuthService.login(this.username,this.password)
    }
  }
  logout(){
    this.userAuthService.logout();
  }

}
