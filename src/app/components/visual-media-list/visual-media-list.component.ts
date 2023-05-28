import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-visual-media-list',
  templateUrl: './visual-media-list.component.html',
  styleUrls: ['./visual-media-list.component.css']
})
export class VisualMediaListComponent implements OnInit {

  _posters: any[] = [];
  @Input() posters: any[] = [];
  @Input() countCols: number = 1;

  constructor() {
    
  }
  ngOnInit(): void {
    this._posters = this.groupColumns(this.posters);
  }

  groupColumns(posters: any[]) {

    const newRows = [];

    for(let index = 0; index < posters.length; index+=this.countCols) {
      newRows.push(posters.slice(index, index + this.countCols));
    }                            
    return newRows;
  }

}
