import { SET_ACTIVATION_INFO } from "./ActionType";
import { SET_COMPANY } from "./ActionType";
export interface ActivationInfoProps {
  company: string;
  activationId: number;
  activationType: string;
  createDate: number;
  customerName: string;
}

export type AllProps = {
  activationInfo: ActivationInfoProps;
  company: string;
};
const initialState: AllProps = {
  activationInfo: undefined,
  company: "default company"
};
export default (
  state = initialState,
  action: { type?: string; payload?: any } = {}
) => {
  switch (action.type) {
    case SET_ACTIVATION_INFO:
      return { ...state, activationInfo: action.payload };
    case SET_COMPANY:
      return { ...state, company: action.payload };
  }
};
