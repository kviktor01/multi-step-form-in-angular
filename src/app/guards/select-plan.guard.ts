import {CanActivateFn} from '@angular/router';
import {inject} from '@angular/core';
import {VisibilityInformationStore} from '../store/visibility-information.store';

export const selectPlanGuard: CanActivateFn = () => {
  const visibilityInformationStore = inject(VisibilityInformationStore);
  return visibilityInformationStore.selectPlanIsVisible();
};
