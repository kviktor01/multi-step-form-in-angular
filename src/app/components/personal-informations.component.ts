import {Component, signal, WritableSignal} from '@angular/core';
import {PersonalInformation} from '../form_models/personal-information.model';
import {FieldTree, form} from '@angular/forms/signals';

@Component(
  {
    selector: 'personal-information',
    template: `
      <div class="personal-information">
        <h1 class="personal-information__title">Personal info</h1>
        <h2 class="personal-information__sub-title">Please provide your name, email adress, and phone number</h2>
        <form>
            <div class="input-block">
                <label for="name">Name</label>
                <input id="name">
            </div>
            <div class="input-block">
                <label for="email">Email</label>
                <input id="email">
            </div>
            <div class="input-block">
                <label for="phone-number">Phone number</label>
                <input id="phone-number">
            </div>
            <button class="form-button">Next step</button>
        </form>   
          
      </div>
    `,
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
      
      .form-button {
          display: block;
          margin-left: auto;
          margin-top: 100px;
          background: hsl(213, 96%, 18%);
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          border: none;
      }
      .form-button:hover {
          cursor: pointer;
          background: hsl(213, 96%, 30%)
      }
    `
  }
)
export class PersonalInformationComponent {

    public personalInformationForm: FieldTree<PersonalInformation>;

    private readonly personalInformationModel: WritableSignal<PersonalInformation>;


    constructor() {
        this.personalInformationModel = signal({name: '', email: '', phoneNumber: ''});
        this.personalInformationForm = form(this.personalInformationModel);
    }


}
