import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fusca5Page } from './fusca5.page';

const routes: Routes = [
  {
    path: '',
    component: Fusca5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Fusca5PageRoutingModule {}
