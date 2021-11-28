import "./styles.css";
import { store } from "./store";
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "react-redux";
import ViewScreen from "./screens/ViewScreen";
import EditScreen from "./screens/EditScreen";
const navigator = createStackNavigator(
  {
    View: ViewScreen,
    Edit: {
      screen: EditScreen,
      navigationOptions: {
        title: "After Merge"
      }
    }
  },
  {
    initialRouteName: "View",
    defaultNavigationOptions: {
      title: "Before Merge"
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
