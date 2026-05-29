import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';


export interface PlanState {
  plan: 'arcade' | 'advanced' | 'pro' ;
  yearly: boolean;
}

export const planState: PlanState = {
  plan: 'arcade',
  yearly: false,
}

const getInitialState = (): PlanState => {
  const savedState = sessionStorage.getItem('plan');
  if (savedState) {
    return JSON.parse(savedState);
  }
  return planState;
};

export const PlanStore = signalStore(
  { providedIn: 'root' },
  withState(getInitialState()),

  // Definiáljuk a metódusokat, amikkel módosítani lehet az állapotot
  withMethods((store) => ({
    updatePlan(planState: PlanState): void {

      sessionStorage.setItem('plan', JSON.stringify(planState));

      patchState(store, planState);
    }
  })));
