import {Component, input} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';


@Component({
  selector: 'sidebar-item',
  template: `
    <a class="step" [routerLink]="path()" [routerLinkActiveOptions]="{ exact: true }" routerLinkActive="active">
      <div class="step__number">{{ stepNumber() }}</div>
      <div>
        <span class="step__subtitle">step {{ stepNumber() }}</span>
        <h2 class="step__title">{{ title() }}</h2>
      </div>
    </a>
  `,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  styleUrl: 'sidebar-item.component.css'
})
export class SidebarItemComponent {

  public title = input.required<string>();

  public stepNumber = input.required<number>();

  public path = input.required<string>();


  constructor() {
  }
}
