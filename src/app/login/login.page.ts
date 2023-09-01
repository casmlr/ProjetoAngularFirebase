import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  constructor(
    public _authenticate: AuthenticateService,
    private _crudService: CrudService,
    private _message: MessageService,
    public router: Router
  ) { }
    
  ngOnInit() {
  }


  realizarLogin(dados: any) {
    this._authenticate.login(dados.email, dados.password);
  }

}
