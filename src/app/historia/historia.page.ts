import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.page.html',
  styleUrls: ['./historia.page.scss'],
})
export class HistoriaPage implements OnInit {

  veiculos:any;

  constructor(
    private _crudService: CrudService,
    private _message: MessageService,
    private router: Router
  ) {
    this.listarAlunos();
   }

  ngOnInit() {
  }

  listarAlunos(){
    this._crudService.fetchAll('veiculos')
    .then( veiculos => {
      this.veiculos = veiculos;
      console.log(this.veiculos)
    })
  }

  exibir(veiculo:any){
    localStorage.setItem('veiculo', JSON.stringify(veiculo));
    this.router.navigate(['/detalhes-veiculo']);
  }

}
