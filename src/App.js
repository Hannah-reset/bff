import "./styles.css";
import { store } from "./store";
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "react-redux";
import ViewScreen from "./screens/ActivationInfoScreen";
const navigator = createStackNavigator(
  {
    View: ViewScreen,
    Edit: ViewScreen
  },
  {
    initialRouteName: "View",
    defaultNavigationOptions: {
      title: "View"
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
