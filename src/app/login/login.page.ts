import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  conectado:boolean = false;
  login:any;
  senha:any;
  login_incorreto:boolean=false;

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }


  acessar(){
 
    if(this.login=='1' && this.senha=='1'){
      this.conectado=true;
      this.login_incorreto=false;
      this.router.navigate(['/historia'])
    } else{
      this.conectado=false;
      this.login_incorreto=true;
    }
    
  }

}
