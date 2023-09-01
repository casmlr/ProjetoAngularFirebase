import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fusca6Page } from './fusca6.page';

const routes: Routes = [
  {
    path: '',
    component: Fusca6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Fusca6PageRoutingModule {}
