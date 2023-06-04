import { Component } from '@angular/core';
import { ActionButton } from 'src/app/ActionButton';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  iconClass: string[] = ['fa', 'fa-plus'];

  actionsToButton: ActionButton[] = [
    {
      tooltip: 'Lista',
      url: '/list',
      class: ['fa', 'fa-list']
    },
    {
      tooltip: 'Resenha',
      url: '/write',
      class: ['fa', 'fa-pencil']
    }
  ];

}
