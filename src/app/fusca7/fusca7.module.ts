import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Fusca7PageRoutingModule } from './fusca7-routing.module';

import { Fusca7Page } from './fusca7.page';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Fusca7PageRoutingModule,
    RouterLink
  ],
  declarations: [Fusca7Page]
})
export class Fusca7PageModule {}
