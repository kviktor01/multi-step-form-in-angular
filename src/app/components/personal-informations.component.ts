import {ChangeDetectionStrategy, Component, inject, signal, WritableSignal} from '@angular/core';
import {PersonalInformation} from '../form_models/personal-information.model';
import {email, FieldTree, form, FormField, required} from '@angular/forms/signals';
import {Router} from '@angular/router';
import {PersonalInformationStore} from '../store/personal-information.store';
import {VisibilityInformationStore} from '../store/visibility-information.store';

@Component(
  {
      selector: 'personal-information',
      template: `
          <div class="personal-information">
              <h1 class="personal-information__title">Personal info</h1>
              <h2 class="personal-information__sub-title">Please provide your name, email adress, and phone number</h2>
              <form (submit)="onSubmit($event)" novalidate>
                  <div class="input-block">
                      <div class="input-label-row">
                          <label for="name">Name</label>
                        @if ((personalInformationForm.name().touched() || submitted()) && personalInformationForm.name().invalid()) {
                          @for (error of personalInformationForm.name().errors(); track error.message) {
                            <span>{{ error.message }}</span>
                          }
                        }
                      </div>
                      <input id="name" [formField]="personalInformationForm.name">
                     
                  </div>
                  <div class="input-block">
                      <div class="input-label-row">
                          <label for="email">Email</label>
                          @if ((personalInformationForm.email().touched() || submitted()) && personalInformationForm.email().invalid()) {
                              @for (error of personalInformationForm.email().errors(); track error.message) {
                                  <span>{{ error.message }}</span>
                              }
                          }
                      </div>  
                      <input id="email" [formField]="personalInformationForm.email">
                  </div>
                  <div class="input-block">
                      <div class="input-label-row">
                          <label for="email">Phone number</label>
                          @if ((personalInformationForm.phoneNumber().touched() || submitted()) && personalInformationForm.phoneNumber().invalid()) {
                            @for (error of personalInformationForm.phoneNumber().errors(); track error.message) {
                              <span>{{ error.message }}</span>
                            }
                          }
                      </div>
                    <input id="phone-number" [formField]="personalInformationForm.phoneNumber">
                  </div>
                <div class="form-buttons-row">
                  <button class="form-button" style="margin-left: auto" type="submit">Next step</button>
                </div>
              </form>

          </div>
      `,
      imports: [
          FormField
      ],
      styles: `
          .personal-information {
              padding: 40px 90px 20px 40px;
          }

          .personal-information__title {
              margin-top: 0;
              margin-bottom: 10px;
              font-size: 1.8rem;
              color: hsl(213, 96%, 18%);
          }

          .personal-information__sub-title {
              margin-top: 0;
              font-size: 1.1rem;
              font-weight: lighter;
              color: hsl(231, 11%, 63%);
          }

          .input-block {
              margin-top: 20px;

          }

          .input-block label {
              display: block;
              margin-bottom: 5px;
              color: hsl(213, 96%, 18%);
          }

          .input-block input {
              width: 100%;
              font-size: 1.1rem;
              padding: 10px;
              border-color: hsl(229, 24%, 87%);
              border-width: 1px;
              border-style: solid;
              border-radius: 5px;
              color: hsl(213, 96%, 18%);
          }

          .input-block input:focus {
              border-color: hsl(243, 100%, 62%);
              outline: none;
          }
          
          .input-label-row {
              display: flex;
              justify-content: space-between;
          }
          
          .input-label-row span {
              color: hsl(354, 84%, 57%);
              font-weight: 500;
          }
      `,
    changeDetection: ChangeDetectionStrategy.OnPush
  }
)
export class PersonalInformationComponent {

    public personalInformationForm: FieldTree<PersonalInformation>;
    public readonly submitted = signal(false);

    private readonly personalInformationModel: WritableSignal<PersonalInformation>;
    private readonly router = inject(Router);
    private readonly personalInformationStore = inject(PersonalInformationStore);
    private readonly visibilityInformationStore = inject(VisibilityInformationStore);


    constructor() {
        this.personalInformationModel = signal({
          name: this.personalInformationStore.name(),
          email: this.personalInformationStore.email(),
          phoneNumber: this.personalInformationStore.phoneNumber()
        });

        this.personalInformationForm = form(this.personalInformationModel, (schemaPath) => {
            required(schemaPath.name, {message: 'This field is required'});
            required(schemaPath.email, {message: 'This field is required'});
            email(schemaPath.email, {message: 'This field must be a valid email address'});
            required(schemaPath.phoneNumber, {message: 'This field is required'});
        });

    }


    public onSubmit(event: Event): void {
        event.preventDefault();
        this.submitted.set(true);

        if(!this.personalInformationForm().valid()){
          this.visibilityInformationStore.updateVisibilityInformation({personalInformationIsVisible: true, selectPlanIsVisible: false, addonsIsVisible: false, summaryIsVisible: false});
          return;
        }

        this.personalInformationStore.updatePersonalInformation(this.personalInformationModel().name, this.personalInformationModel().email, this.personalInformationModel().phoneNumber);
        this.visibilityInformationStore.updateVisibilityInformation({personalInformationIsVisible: true, selectPlanIsVisible: true, addonsIsVisible: false, summaryIsVisible: false});
        this.router.navigate(['/select-plan']).then();
    }


}
