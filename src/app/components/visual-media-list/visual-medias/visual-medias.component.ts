import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-visual-medias',
  templateUrl: './visual-medias.component.html',
  styleUrls: ['./visual-medias.component.css']
})
export class VisualMediasComponent implements OnChanges {

  rows: any[] = [];
  @Input() visualMedias: any[] = [];
  @Input() countCols: number = 3;

  constructor() {
    
  }
  ngOnChanges(changes: SimpleChanges): void {    
    if(changes['visualMedias']) 
      this.rows = this.groupColumns(this.visualMedias);
  }

  groupColumns(visualMedias: any[]) {

    const newRows = [];

    for(let index = 0; index < visualMedias.length; index+=this.countCols) {
      newRows.push(visualMedias.slice(index, index + this.countCols));
    }                            
    return newRows;
  }

}