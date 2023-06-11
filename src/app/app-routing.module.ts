import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualMediaListComponent } from './components/visual-media-list/visual-media-list.component';
import { VisualMediaDetailsComponent } from './components/visual-media-details/visual-media-details.component';

const routes: Routes = [
  { path: '', component: VisualMediaListComponent},
  { path: 'detail/:mediaType/:id', component: VisualMediaDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
