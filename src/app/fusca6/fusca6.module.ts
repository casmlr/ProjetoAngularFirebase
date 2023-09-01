import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Fusca6PageRoutingModule } from './fusca6-routing.module';

import { Fusca6Page } from './fusca6.page';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Fusca6PageRoutingModule,
    RouterLink
  ],
  declarations: [Fusca6Page]
})
export class Fusca6PageModule {}
