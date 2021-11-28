import { createStore } from "redux";
import reducers from "./redux/ActivationReducer";

export const store = createStore(reducers);
