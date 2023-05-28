import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PosterComponent } from './components/poster/poster.component';
import { VisualMediaListComponent } from './components/visual-media-list/visual-media-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PosterComponent,
    VisualMediaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
