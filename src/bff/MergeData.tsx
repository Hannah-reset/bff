import { mockActivation } from "../db/Activation.db";
import { mockCustomer } from "../db/Customer.db";
import { setActivation } from "../redux/ActivationAction";
import { store } from "../store";
class ActivationUIProps {
  company: string;
  activationId: number;
  activationType: string;
  createDate: number;
  customerName: string;
}
const mergeData = () => {
  const newData = new ActivationUIProps();
  newData.customerName = mockCustomer().customerName;
  const date = new Date();
  newData.createDate = date.getTime();
  return newData;
};

export const pageData = (company: string, id?: number): ActivationUIProps => {
  const activationInfo = mockActivation(company, id);
  if (activationInfo) {
    store.dispatch(setActivation(activationInfo));
    return activationInfo;
  }
  return mergeData();
};
