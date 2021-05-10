import { createStore } from "vuex";
import { IRootState } from "./interfaces";
import { DashboardStoreModuleTypes } from "./modules/dashboard/types";
import { RootStoreModuleTypes } from "./modules/root/types";

import root from "./modules/root";
export const store = createStore<IRootState>(root);

type StoreModules = {
  dashboardModule: DashboardStoreModuleTypes;
  root: RootStoreModuleTypes;
};

export type Store = DashboardStoreModuleTypes<Pick<StoreModules, "dashboardModule">> &
    RootStoreModuleTypes<Pick<StoreModules, "root">>;
