import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-fusca7',
  templateUrl: './fusca7.page.html',
  styleUrls: ['./fusca7.page.scss'],
})
export class Fusca7Page  {
  constructor(
    private router: Router
  ){}
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
