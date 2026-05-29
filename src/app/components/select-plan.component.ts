import {Component, inject, signal, WritableSignal} from '@angular/core';
import {ToggleSwitchComponent} from './toggle-switch/toggle-switch.component';
import {RadioButtonComponent} from './radio-button/radio-button.component';
import {FormsModule} from '@angular/forms';
import {VisibilityInformationStore} from '../store/visibility-information.store';
import {PlanStore} from '../store/plan.store';
import {Router} from '@angular/router';


@Component({
    selector: 'select-plan',
    template: `
      <div>
        <h1>Select plan</h1>
        <div class="radio-group">
          <radio-button
            [id]="'price1'"
            [value]="'arcade'"
            [name]="'plan'"
            [price]="yearly() ? 90: 9"
            [yearly]="yearly()"
            [(plan)]="plan"
          >
          </radio-button>

          <radio-button
            [id]="'price2'"
            [value]="'advanced'"
            [name]="'plan'"
            [price]="yearly() ? 120: 12"
            [yearly]="yearly()"
            [(plan)]="plan"
          >
          </radio-button>

          <radio-button
            [id]="'price3'"
            [value]="'pro'"
            [name]="'plan'"
            [price]="yearly() ? 150: 15"
            [yearly]="yearly()"
            [(plan)]="plan"
          >
          </radio-button>

        </div>

        <toggle-switch
          class="toggle-switch"
          [(checked)]="yearly"
        ></toggle-switch>

        <div class="form-buttons-row">
          <a class="back-button" href="/"> Go Back</a>
          <button (click)="navigateAndSavePlan()" class="form-button">Next step</button>
        </div>
      </div>
    `,
  styles: `
    .radio-group {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
    }
    .toggle-switch {
        display: flex;
        justify-content: center;
    }
  `,
    imports: [
      ToggleSwitchComponent,
      RadioButtonComponent,
      FormsModule
    ]
  }
)
export class SelectPlanComponent {

  public yearly = signal<boolean>(false);
  public plan: WritableSignal<'arcade' | 'pro' | 'advanced'> = signal('arcade');

  private readonly planStore = inject(PlanStore);
  private readonly visibilityInformationStore = inject(VisibilityInformationStore);
  private readonly router = inject(Router);

  public navigateAndSavePlan() {
      this.planStore.updatePlan({plan:this.plan(), yearly: this.yearly()});
      this.visibilityInformationStore.updateVisibilityInformation({personalInformationIsVisible: true, selectPlanIsVisible: true, addonsIsVisible: true, summaryIsVisible: false});
      this.router.navigate(['/add-ons']).then();
  }
}
