import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {LoginService} from '../providers/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,public loginService:LoginService) { }

  ngOnInit() {}
  login(){
   this.loginService.isLogin=true
   localStorage.setItem('isLogin','true')
   this.router.navigate(['/folder/dashboard'])


  }

}
