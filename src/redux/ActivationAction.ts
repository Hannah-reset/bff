import { SET_ACTIVATION_INFO } from "./ActionType";
import { SET_COMPANY } from "./ActionType";
import { ActivationInfoProps } from "./ActivationReducer";
export const setActivation = (payload: ActivationInfoProps) => {
  return {
    type: SET_ACTIVATION_INFO,
    payload: payload
  };
};
export const setCompany = (payload: string) => {
  return {
    type: SET_COMPANY,
    payload: payload
  };
};
