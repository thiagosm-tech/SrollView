import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrollViewComponent } from './scroll-view/scroll-view.component';

const routes: Routes = [
  {
    path: '',
    component: ScrollViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
