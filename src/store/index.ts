import { InjectionKey } from "vue";
import {
  createStore,
  Store as VuexStore,
  useStore as baseUseStore,
} from "vuex";
import generic, {
  State as GenericState,
  Store as GenericStore,
} from "./modules/generic_modules";

// define tipos pro state da store
export interface RootState {
  debitos: GenericState;
  /* other: OtherState; */
}

export type RootStore = GenericStore<Pick<RootState, "debitos">>;
// & OtherStore<Pick<RootState, "other">> &

// define injection key
export const key: InjectionKey<VuexStore<RootState>> = Symbol();
export const store = createStore<RootState>({
  modules: {
    generic,
    // other
  },
});
// o usar `import useStore from '@store'`
export default function useStore(): RootStore {
  return baseUseStore(key);
}