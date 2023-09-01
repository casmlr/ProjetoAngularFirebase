import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fusca8Page } from './fusca8.page';

const routes: Routes = [
  {
    path: '',
    component: Fusca8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Fusca8PageRoutingModule {}
