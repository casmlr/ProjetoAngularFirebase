import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fusca2Page } from './fusca2.page';

const routes: Routes = [
  {
    path: '',
    component: Fusca2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Fusca2PageRoutingModule {}
