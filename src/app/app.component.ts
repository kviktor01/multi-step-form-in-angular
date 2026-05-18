import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {PersonalInformationStore} from './store/personal-information.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <router-outlet/>
  `,
  providers: [PersonalInformationStore]
})
export class AppComponent {
  title = 'multi-step-form';
}
