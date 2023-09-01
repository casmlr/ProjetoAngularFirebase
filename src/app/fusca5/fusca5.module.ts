import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Fusca5PageRoutingModule } from './fusca5-routing.module';

import { Fusca5Page } from './fusca5.page';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Fusca5PageRoutingModule,
    RouterLink
  ],
  declarations: [Fusca5Page]
})
export class Fusca5PageModule {}
