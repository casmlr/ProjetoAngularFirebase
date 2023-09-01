import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Fusca4PageRoutingModule } from './fusca4-routing.module';

import { Fusca4Page } from './fusca4.page';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Fusca4PageRoutingModule,
    RouterLink
  ],
  declarations: [Fusca4Page]
})
export class Fusca4PageModule {}
