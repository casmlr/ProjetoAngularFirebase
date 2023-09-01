import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  alunos = [];

  nome = 'Joaozinho';

  aluno = {
    nome: null,
    idade: null,
    ra: null,
    id: null
  }

  public file: any = {};

  isLoading: boolean = false;
  nome_usuario: any;

  constructor(
    public _authenticate: AuthenticateService,
    private _crudService: CrudService,
    public storage: Storage,
    private _message: MessageService
  ) { }

 criarConta(dados: any){
    this._authenticate.register(dados.email,dados.password)
  }

 
  
}
