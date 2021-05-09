import { GetterTree } from "vuex";
import { State } from "./index";
import { RootState } from "@/store";
// (D) - Getters
// [D.1] - Define o tipo do getter x
// => x(state: S): TIPO_DE_X;
export type Getters<S = State> = {
  value(state: S): any;
};

// [D.2] - Declara o getter x
// =>  x: (state) => {
// =>    return state.x;
// =>  },
export const getters: GetterTree<State, RootState> & Getters = {
  value: (state) => {
    return state.value;
  },
};
