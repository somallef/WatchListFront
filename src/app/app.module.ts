import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PosterComponent } from './components/poster/poster.component';
import { VisualMediaListComponent } from './components/visual-media-list/visual-media-list.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { FloatButtonComponent } from './float-button/float-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PosterComponent,
    VisualMediaListComponent
    HeaderComponent,
    FooterComponent,
    FloatButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
