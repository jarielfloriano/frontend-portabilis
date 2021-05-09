import { MutationTree } from "vuex";
import { State } from "./index";
// (B) - Mutações
// [B.1] inserir a definição da mutação X no enum
// ==> { X = "SET_ X" }
export enum MutationTypes {
  VALUE = "SET_VALUE",
}

// [B.2] definir o tipo da mutação X
// ==> [MutationTypes.X](state: S, payload: TIPO_DE_X): void;
export type Mutations<S = State> = {
  [MutationTypes.VALUE](state: S, payload: any): void;
};

// [B.3] declarar a mutação X
// ==>  [MutationTypes.X](state, payload) {
// ==>    state.x = payload;
// ==>  },
export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.VALUE](state, payload) {
    state.value = payload;
  },
};
