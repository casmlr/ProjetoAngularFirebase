import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fusca9Page } from './fusca9.page';

const routes: Routes = [
  {
    path: '',
    component: Fusca9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Fusca9PageRoutingModule {}
