import {
  DashboardStateTypes,
  DashboardMutationsTypes,
  DashboardGettersTypes,
  DashboardActionsTypes
} from "../../interfaces";
import { Store as VuexStore, CommitOptions, DispatchOptions } from "vuex";

export type DashboardStoreModuleTypes<S = DashboardStateTypes> = Omit<
  VuexStore<S>,
  "commit" | "getters" | "dispatch"
> & {
  commit<
    K extends keyof DashboardMutationsTypes,
    P extends Parameters<DashboardMutationsTypes[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<DashboardMutationsTypes[K]>;
} & {
  getters: {
    [K in keyof DashboardGettersTypes]: ReturnType<DashboardGettersTypes[K]>;
  };
} & {
  dispatch<K extends keyof DashboardActionsTypes>(
    key: K,
    payload?: Parameters<DashboardActionsTypes[K]>[1],
    options?: DispatchOptions
  ): ReturnType<DashboardActionsTypes[K]>;
};
