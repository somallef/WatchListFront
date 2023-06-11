import { Component, OnInit } from '@angular/core';
import { TMDBService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-visual-media-list',
  templateUrl: './visual-media-list.component.html',
  styleUrls: ['./visual-media-list.component.css']
})
export class VisualMediaListComponent implements OnInit {

  hasMore: boolean = true;
  currentPage: number = 1;
  visualMedias: any[] = [];
  filter: string = '';

  constructor(private tmdbService: TMDBService) { }

  ngOnInit(): void {
    
  }

  onSearchQueryChanged(query: string): void {

    this.filter = query;

    if(this.filter) {
      this.tmdbService.searchByTitle(this.filter).subscribe(tmdbResult => {
        this.visualMedias = tmdbResult.results;
        this.currentPage = tmdbResult.page;
        this.hasMore = !(this.currentPage === tmdbResult.total_pages);
      })
    } else {
      this.visualMedias = [];
    }
  }

  loadMore() {
    this.tmdbService.searchByTitle(this.filter, ++this.currentPage).subscribe(tmdbResult => {
      this.visualMedias = this.visualMedias.concat(tmdbResult.results);
      this.hasMore = !(this.currentPage === tmdbResult.total_pages);
    })
  }

}
