import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-fusca1',
  templateUrl: './fusca1.page.html',
  styleUrls: ['./fusca1.page.scss'],
})
export class Fusca1Page  {
  public alertButtons = ['OK'];
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
