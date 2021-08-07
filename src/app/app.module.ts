import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollViewComponent } from './scroll-view/scroll-view.component';
import { NewScrollViewComponent } from './new-scroll-view/new-scroll-view.component';
import { ContentsModule } from './new-scroll-view/directives';

@NgModule({
  declarations: [
    AppComponent,
    ScrollViewComponent,
    NewScrollViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
