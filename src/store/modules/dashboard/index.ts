import { Module } from "vuex";
import { DashboardStateTypes, IRootState } from "../../interfaces";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { state } from "./state";

// Module
const dashboard: Module<DashboardStateTypes, IRootState> = {
  state,
  getters,
  mutations,
  actions
};

export default dashboard;
