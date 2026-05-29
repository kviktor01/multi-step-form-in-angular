import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';

export interface VisibilityInformationState {
  personalInformationIsVisible: boolean
  selectPlanIsVisible: boolean
  addonsIsVisible: boolean
  summaryIsVisible: boolean
}

export const visibilityInformationState: VisibilityInformationState = {
    personalInformationIsVisible: true,
    selectPlanIsVisible: false,
    addonsIsVisible: false,
    summaryIsVisible: false,
}

const getInitialState = (): VisibilityInformationState => {
  const savedState = sessionStorage.getItem('visibility_information');
  if (savedState) {
    return JSON.parse(savedState);
  }
  return visibilityInformationState;
};

export const VisibilityInformationStore = signalStore(
  { providedIn: 'root' },
  // Biztosítjuk a kezdeti állapotot
  withState(getInitialState()),

  // Definiáljuk a metódusokat, amikkel módosítani lehet az állapotot
  withMethods((store) => ({
    updateVisibilityInformation(visibilityInformationState: VisibilityInformationState): void {

      sessionStorage.setItem('visibility_information', JSON.stringify(visibilityInformationState));

      patchState(store, visibilityInformationState);
    }
  }))
);
