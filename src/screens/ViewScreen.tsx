import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { pageData } from "../bff/MergeData";
import { setCompany } from "../redux/ActivationAction";

const ViewScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  dispatch(setCompany("new company"));
  const data = pageData("company");
  return (
    <View>
      <Text>company: {data?.company ?? "-"}</Text>
      <Text>customerName: {data?.customerName ?? "-"}</Text>
      <Text>activationId: {data?.activationId ?? "-"}</Text>
      <Text>activationType: {data?.activationType ?? "-"}</Text>
      <Text>createDate: {data?.createDate ?? "-"}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Edit", { title: "After" })}
      >
        Edit
      </TouchableOpacity>
    </View>
  );
};

export default ViewScreen;
