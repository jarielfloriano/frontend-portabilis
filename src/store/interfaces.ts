import { ActionContext, DispatchOptions } from "vuex";
import { MutationTypes as DashboardMTypes } from "./modules/dashboard/mutation-types";
import { ActionTypes as DashboardATypes } from "./modules/dashboard/action-types";
import { MutationTypes as RootMTypes } from "./modules/root/mutation-types";
import { ActionTypes as RootATypes } from "./modules/root/action-types";

export interface IRootState {
  root: boolean;
  version: string;
}

export interface IMergedState extends IRootState {
  dashboardModule:DashboardStateTypes;
}

export interface IRootGettersTypes {
  getVersion(state: IRootState): string;
}

export type RootMutationsTypes<S = IRootState> = {
  [RootMTypes.UPDATE_VERSION](state: S, payload: string): void;
};

/**
 * probably this can be moved inside individual module
 * as counterTypes.ts and then can be imported here
 */
type AugmentedActionContextRoot = {
  commit<K extends keyof RootMutationsTypes>(
    key: K,
    payload: Parameters<RootMutationsTypes[K]>[1]
  ): ReturnType<RootMutationsTypes[K]>;
} & Omit<ActionContext<IRootState, IRootState>, "commit"> & {
    dispatch<K extends keyof StoreActions>(
      key: K,
      payload?: Parameters<StoreActions[K]>[1],
      options?: DispatchOptions
    ): ReturnType<StoreActions[K]>;
  };

export interface RootActionsTypes {
  [RootATypes.UPDATE_VERSION](
    { commit }: AugmentedActionContextRoot,
    payload: string
  ): void;
  [RootATypes.COUNTER_CHECK](
    { dispatch }: AugmentedActionContextRoot,
    payload: boolean
  ): void;
}

/***********************  DASHBOARD MODULE TYPES  ***********************/
export interface DashboardStateTypes {
  sideBarOpen?: boolean;
  rootDispatch?: boolean;
}

export interface DashboardGettersTypes {
  getSideBarOpen(state: DashboardStateTypes): boolean;
  getRootDispatch(state: DashboardStateTypes): boolean;
}

export type DashboardMutationsTypes<S = DashboardStateTypes> = {
  [DashboardMTypes.SET_OPEN](state: S, payload: boolean): void;
  [DashboardMTypes.TOGGLE](state: S, payload: boolean): void;
  [DashboardMTypes.SET_ROOT_DISPATCH](state: S, payload?: boolean): void;
};

export type AugmentedActionContext = {
  commit<K extends keyof DashboardMutationsTypes>(
    key: K,
    payload: Parameters<DashboardMutationsTypes[K]>[1]
  ): ReturnType<DashboardMutationsTypes[K]>;
} & Omit<ActionContext<DashboardStateTypes, IRootState>, "commit">;

export interface DashboardActionsTypes {
  [DashboardATypes.GET_OPEN](
    { commit }: AugmentedActionContext,
    payload: boolean
  ): void;
  [DashboardATypes.TOGGLE](
      { commit }: AugmentedActionContext,
      payload: boolean
  ): void;
  [DashboardATypes.SET_ROOT_DISPATCH](
    { commit }: AugmentedActionContext,
    payload: boolean
  ): void;
}

export interface StoreActions
  extends RootActionsTypes,
      DashboardActionsTypes {}

export interface StoreGetters
  extends IRootGettersTypes,
    DashboardGettersTypes {}
