import {Component, input} from '@angular/core';


@Component({
  selector: 'sidebar-item',
  template: `
    <div class="step">
      <div class="step__number">{{stepNumber()}}</div>
      <div>
        <span class="step__subtitle">step {{stepNumber()}}</span>
        <h2 class="step__title">{{title()}}</h2>
      </div>
    </div>
  `,
  styleUrl: "sidebar-item.component.css"
})
export class SidebarItemComponent {

  public title = input.required<string>();

  public stepNumber = input.required<number>();

  constructor() {
  }
}
