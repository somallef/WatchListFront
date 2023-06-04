import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionButton } from '../ActionButton';

@Component({
  selector: 'app-float-button',
  templateUrl: './float-button.component.html',
  styleUrls: ['./float-button.component.css']
})
export class FloatButtonComponent implements OnInit {

  @Input() actions!: ActionButton[];
  @Input() tooltipText!: string;
  @Input() iconClass!: string[];


  constructor(
    private router: Router,
  ) { }


  ngOnInit(): void {
  }


  goTo(url: string): void{
    this.router.navigate([url]);
  }
}