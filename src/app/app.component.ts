import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WatchListFront';

  posters: any[] = Array.from({ length: 100 }, (_, index) => ({
    url: `http://lorempixel.com.br/200/300?index=${index}`,
    description: ""
  }));
}
