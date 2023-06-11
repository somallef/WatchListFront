import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisualMediaComponent } from './components/visual-media/visual-media.component';
import { VisualMediaListComponent } from './components/visual-media-list/visual-media-list.component';
import { HeaderComponent } from './core/header/header.component';

import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoadButtonComponent } from './components/visual-media-list/load-button/load-button.component';
import { VisualMediasComponent } from './components/visual-media-list/visual-medias/visual-medias.component';
import { VisualMediaDetailsComponent } from './components/visual-media-details/visual-media-details.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualMediaComponent,
    VisualMediaListComponent,
    HeaderComponent,
    SearchComponent,
    LoadButtonComponent,
    VisualMediasComponent,
    VisualMediaDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
