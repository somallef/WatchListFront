import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const TMDB_POSTER_URL: string = environment.TMDB_POSTER_URL;

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor() { }

  private _url = ''
    
    
  @Input() set url(url: string) {      
    this._url = TMDB_POSTER_URL + url;
  }

  get url() {
    return this._url;
  }

  ngOnInit(): void {
  }

}
