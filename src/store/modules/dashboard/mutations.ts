import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { DashboardMutationsTypes, DashboardStateTypes } from "../../interfaces";

export const mutations: MutationTree<DashboardStateTypes> &
  DashboardMutationsTypes = {
  [MutationTypes.TOGGLE](state: DashboardStateTypes) {
    state.sideBarOpen = !state.sideBarOpen;
  },
  [MutationTypes.SET_OPEN](state: DashboardStateTypes, payload: boolean) {
    state.sideBarOpen = payload;
  },
  [MutationTypes.SET_ROOT_DISPATCH](state, payload: boolean) {
    state.rootDispatch = payload;
  }
};
