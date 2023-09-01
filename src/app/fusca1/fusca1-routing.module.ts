import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fusca1Page } from './fusca1.page';

const routes: Routes = [
  {
    path: '',
    component: Fusca1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Fusca1PageRoutingModule {}
