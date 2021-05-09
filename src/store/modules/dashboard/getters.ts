import { GetterTree } from "vuex";
import {
  DashboardGettersTypes,
  DashboardStateTypes,
  IRootState
} from "../../interfaces";

export const getters: GetterTree<DashboardStateTypes, IRootState> &
  DashboardGettersTypes = {
  getSideBarOpen: (state: DashboardStateTypes) => {
    return state.sideBarOpen || false;
  },
  getRootDispatch: (state: DashboardStateTypes) => {
    return state.rootDispatch || false;
  }
};
