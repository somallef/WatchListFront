import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment.development';


@Component({
  selector: 'app-visual-media',
  templateUrl: './visual-media.component.html',
  styleUrls: ['./visual-media.component.css']
})
export class VisualMediaComponent {

  tmdbUrlImages: string = environment.tmdbUrlImages + "w185/";

  @Input() visualMedia!: any;

}
