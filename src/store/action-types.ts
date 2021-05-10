import { ActionTypes as dashboardTypes } from "./modules/dashboard/action-types";
import { ActionTypes as rootATypes } from "./modules/root/action-types";

export const AllActionTypes = {
  ...dashboardTypes,
  ...rootATypes
};
