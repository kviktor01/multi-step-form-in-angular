import { ApplicationConfig} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';

import { routes } from './app.routes';
import {PersonalInformationStore} from './store/personal-information.store';
import {VisibilityInformationStore} from './store/visibility-information.store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    PersonalInformationStore,
    VisibilityInformationStore
  ]
};
