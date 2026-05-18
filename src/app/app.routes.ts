import { Routes } from '@angular/router';
import {ContainerComponent} from './components/container.component';
import {PersonalInformationComponent} from './components/personal-informations.component';

export const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '',
        component: PersonalInformationComponent
      }
    ]
  }
];
