import { ActionTree } from "vuex";
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutation-types";
import {
  DashboardActionsTypes,
  DashboardStateTypes,
  IRootState
} from "../../interfaces";

export const actions: ActionTree<DashboardStateTypes, IRootState> &
  DashboardActionsTypes = {
  [ActionTypes.TOGGLE]({ commit }, payload: boolean) {
    commit(MutationTypes.TOGGLE, payload);
  },
  [ActionTypes.GET_OPEN]({ commit }, payload: boolean) {
    commit(MutationTypes.SET_OPEN, payload);
  },
  [ActionTypes.SET_ROOT_DISPATCH]({ commit }, payload: boolean) {
    commit(MutationTypes.SET_ROOT_DISPATCH, payload);
  },
};
