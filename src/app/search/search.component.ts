import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchControl: FormControl = new FormControl()
  @Output() onTyping = new EventEmitter<string>();
  @Input() placeholder: string = '';

  constructor() {}

  ngOnInit(): void {

    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      //filter((value: string) => value.length > 3)
    ).subscribe((value: string) => {
      this.onTyping.emit(value);
    });
  }
  
 
}