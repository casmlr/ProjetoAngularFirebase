import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Fusca9PageRoutingModule } from './fusca9-routing.module';

import { Fusca9Page } from './fusca9.page';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Fusca9PageRoutingModule,
    RouterLink
  ],
  declarations: [Fusca9Page]
})
export class Fusca9PageModule {}
