import {Component, model} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'toggle-switch',
  template: `
    <div class="toggle-switch">
      <label class="toggle-switch__label" for="monthly-or-yearly-toggle-switch">
        <span class="label" [ngClass]="{'active': !checked()}">Monthly</span>
        <span class="toggle-switch__slider">
          <span class="toggle-switch__slider-circle" [ngClass]="{'unchecked': !checked(), 'checked': checked()}"></span>
        </span>
        <span class="label" [ngClass]="{'active': checked()}">Yearly</span>
      </label>
      <input 
         #checkbox 
         class="toggle-switch__input"
         type="checkbox"
         id="monthly-or-yearly-toggle-switch"
         [(ngModel)]="checked"
      />
    </div>
  `,
  imports: [
    FormsModule,
    NgClass
  ],
  styleUrls: ['./toggle-switch.component.css']
})
export class ToggleSwitchComponent {

  public checked = model.required<boolean>();

  constructor() {
  }

}
