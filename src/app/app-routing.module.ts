import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewScrollViewComponent } from './new-scroll-view/new-scroll-view.component';
import { ScrollViewComponent } from './scroll-view/scroll-view.component';

const routes: Routes = [
  {
    path: '',
    component: ScrollViewComponent
  }, 
  {
    path: 'new',
    component: NewScrollViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
