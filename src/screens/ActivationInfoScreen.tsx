import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { pageData } from "../bff/MergeData";
import { setCompany } from "../redux/ActivationAction";

const ViewScreen = ({ navigation }) => {
  const data = pageData("company", 2);
  const dispatch = useDispatch();
  dispatch(setCompany("new company"));

  return (
    <View>
      <Text>company: {data.company ?? "-"}</Text>
      <Text>customerName: {data.customerName ?? "-"}</Text>
      <Text>activationId: {data.activationId ?? "-"}</Text>
      <Text>activationType: {data.activationType ?? "-"}</Text>
      <Text>createDate: {data.createDate ?? "-"}</Text>
    </View>
  );
};

ViewScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate("Edit")}
      ></TouchableOpacity>
    )
  };
};

export default ViewScreen;
