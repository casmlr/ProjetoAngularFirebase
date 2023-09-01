import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fusca7Page } from './fusca7.page';

const routes: Routes = [
  {
    path: '',
    component: Fusca7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Fusca7PageRoutingModule {}
