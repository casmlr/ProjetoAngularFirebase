import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-veiculo',
  templateUrl: './detalhes-veiculo.page.html',
  styleUrls: ['./detalhes-veiculo.page.scss'],
})
export class DetalhesVeiculoPage {
  veiculo:any;
  nome:any;
  cor:any;
  valor: any;
  potencia: any;
  ano_de_fabricacao: any;
  modelo: any;

  constructor(
    private router: Router
  ){
    this.veiculo = JSON.parse(String(localStorage.getItem('veiculo')));
  }
  cadastrar(dados:any){
    console.log(dados)
  }

  public alertButtons = [
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
        this.router.navigate(['/confirmar-compra']);
      },
    },
  ];
  public alertInputs = [
    {
      placeholder: 'Name',
    },
    {
      placeholder: 'Email',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'Idade',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'telefone',
    },
  ];
}
