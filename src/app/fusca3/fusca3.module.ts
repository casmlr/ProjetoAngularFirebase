import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Fusca3PageRoutingModule } from './fusca3-routing.module';

import { Fusca3Page } from './fusca3.page';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Fusca3PageRoutingModule,
    RouterLink
  ],
  declarations: [Fusca3Page]
})
export class Fusca3PageModule {}
