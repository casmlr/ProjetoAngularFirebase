import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Fusca8PageRoutingModule } from './fusca8-routing.module';

import { Fusca8Page } from './fusca8.page';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Fusca8PageRoutingModule,
    RouterLink
  ],
  declarations: [Fusca8Page]
})
export class Fusca8PageModule {}
