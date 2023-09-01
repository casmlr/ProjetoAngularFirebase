import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fusca3Page } from './fusca3.page';

const routes: Routes = [
  {
    path: '',
    component: Fusca3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Fusca3PageRoutingModule {}
