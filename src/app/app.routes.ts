import { Routes } from '@angular/router';
import {ContainerComponent} from './components/container.component';
import {PersonalInformationComponent} from './components/personal-informations.component';
import {SelectPlanComponent} from './components/select-plan.component';
import {selectPlanGuard} from './guards/select-plan.guard';

export const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '',
        component: PersonalInformationComponent
      },
      {
        path: 'select-plan',
        component: SelectPlanComponent,
        canActivate: [selectPlanGuard]
      }
    ]
  }
];
