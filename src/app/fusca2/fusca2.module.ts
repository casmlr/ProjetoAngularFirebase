import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Fusca2PageRoutingModule } from './fusca2-routing.module';

import { Fusca2Page } from './fusca2.page';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Fusca2PageRoutingModule,
    RouterLink
  ],
  declarations: [Fusca2Page]
})
export class Fusca2PageModule {}
