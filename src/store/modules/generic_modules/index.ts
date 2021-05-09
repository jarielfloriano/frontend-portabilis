import { getters, Getters } from "./getters";
import { mutations, Mutations } from "./mutations";
import { actions, Actions, ActionTypes } from "./actions";
import {
  Store as VuexStore,
  Module,
  CommitOptions,
  DispatchOptions,
} from "vuex";
import { RootState } from "@store";

// PARA ALTERAR A STORE
// (A) - Alterar o state ./
// (B) - Alterar as mutações ./mutations.ts
// (C) - Alterar as ações ./actions.ts
// (D) - Alterar os getters ./getters.ts
// !!! não mecher nos snipets de código com comentário em maiusculo !!!

//[A.1] inclui valor na interface do state
// ==> x: TIPO_DE_X
interface State {
  value: any;
}

//[A.2] declara o valor no objeto do state
// ==> x: VALOR_DE_X
const state: State = {
  value: "",
};

const generic_module: Module<State, RootState> = {
  state,
  mutations,
  actions,
  getters,
};

export { State, ActionTypes, Store };
export default generic_module;

// !!! CONFIGURA TIPAGEM DA STORE !!!
type Store<S = State> = Omit<
  VuexStore<S>,
  "commit" | "getters" | "dispatch"
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};
