import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TMDBService } from 'src/app/services/tmdb.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-visual-media-details',
  templateUrl: './visual-media-details.component.html',
  styleUrls: ['./visual-media-details.component.css']
})
export class VisualMediaDetailsComponent implements OnInit {

  visualMedia: any = {};
  tmdbUrlImages: string = environment.tmdbUrlImages + "w342/";
  visualMediaType: string = '';
  visualMediaId: string = '';

  constructor(private route: ActivatedRoute, private tmdbService: TMDBService) { }

  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap;
    this.visualMediaId = routeParams.get('id') ?? '';
    this.visualMediaType = routeParams.get('mediaType') ?? '';

    this.tmdbService.searchById(this.visualMediaId, this.visualMediaType).subscribe(tmdbResult => {
      this.visualMedia = tmdbResult;

      console.log(this.visualMedia)
    })

  }

}
