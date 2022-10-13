import { Component } from '@angular/core';
import { MovieService } from './movie/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  resultsTMDB: any;

  constructor(private movieService: MovieService) {

    movieService.discover().subscribe((res: any) => this.resultsTMDB = res.results);


  }


}
