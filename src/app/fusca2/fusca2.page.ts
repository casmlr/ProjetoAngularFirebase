import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-fusca2',
  templateUrl: './fusca2.page.html',
  styleUrls: ['./fusca2.page.scss'],
})
export class Fusca2Page  {

  @ViewChild(IonModal) modal!: IonModal;
  esperar: boolean = true;
  presentingElement = undefined;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string = '';
  constructor(private actionSheetCtrl: ActionSheetController) { }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    setTimeout(() => {
      this.esperar = false;
    }, 2000);
    this.modal.dismiss(this.name, 'confirm');
  }

  canDismiss = async () => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Quer Fazer a Compra?',
      buttons: [
        {
          text: 'Sim',
          role: 'confirm',
        },
        {
          text: 'não',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  };
}
