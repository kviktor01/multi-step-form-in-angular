import {Component, input, model} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TitleCasePipe} from '@angular/common';

@Component({
  selector: 'radio-button',
  template: `
    
    <input [name]="name()" type="radio" [value]="value()" [(ngModel)]="plan" [id]="id()">
    
    <label [for]="id()" class="radio-button__card">
      <img src="./images/icon-{{value()}}.svg" alt="arcade icon">

      <span class="radio-button-value">
        {{ value() | titlecase }}
      </span>

      <span class="radio-button-price">
        \${{ price() }} / {{ yearly() ? 'yr' : 'mo' }}
      </span>

      @if (yearly()) {
        <span class="radio-button-discount">2 months free</span>
      }

    </label>
  `,
  imports: [
    FormsModule,
    TitleCasePipe
  ],
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent {

  public id = input.required<string>();
  public value = input.required<string>();
  public name = input.required<string>();
  public price = input.required<number>();
  public yearly = input.required<boolean>();

  public plan = model.required<'arcade' | 'pro' | 'advanced'>();

}
