import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';

export interface PersonalInformationState {
  name: string;
  email: string;
  phoneNumber: string;
}

export const initialPersonalInformationState: PersonalInformationState = {
  name: '',
  email: '',
  phoneNumber: ''
};


export const getInitialState = (): PersonalInformationState => {
  const savedState = sessionStorage.getItem('personal_information_state');
  if (savedState) {
    return JSON.parse(savedState);
  }
  return initialPersonalInformationState;
};

export const PersonalInformationStore = signalStore(
  { providedIn: 'root' },

  withState(getInitialState()),

  withMethods((store) => ({
    updatePersonalInformation(name: string, email: string, phoneNumber: string): void {
      const newState = { name, email, phoneNumber };

      sessionStorage.setItem('personal_information_state', JSON.stringify(newState));

      patchState(store, newState);
    }
  }))
);
