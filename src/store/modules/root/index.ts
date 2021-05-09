import { Module, ModuleTree } from "vuex";
import { IRootState } from "../../interfaces";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { state } from "./state";
import dashboardModule from "../dashboard"
// import counterModule from "../counter";
// import counter1Module from "../counter1";

// Modules
const modules: ModuleTree<IRootState> = {
  dashboardModule,
  // counterModule,
  // counter1Module
};

const root: Module<IRootState, IRootState> = {
  state,
  getters,
  mutations,
  actions,
  modules
};

export default root;
