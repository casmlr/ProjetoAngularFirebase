import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fusca4Page } from './fusca4.page';

const routes: Routes = [
  {
    path: '',
    component: Fusca4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Fusca4PageRoutingModule {}
