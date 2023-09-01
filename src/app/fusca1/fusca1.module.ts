import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Fusca1PageRoutingModule } from './fusca1-routing.module';

import { Fusca1Page } from './fusca1.page';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Fusca1PageRoutingModule,
    RouterLink
  ],
  declarations: [Fusca1Page]
})
export class Fusca1PageModule {}
