import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

const ShowSettings = props => {
  return (
    <View style={styles.settingsOuterView}>
      <View style={styles.settingsInnerView}>
        <Text>ShowSettings</Text>
      </View>
    </View>
  );
};

export default ShowSettings;

const styles = StyleSheet.create({
  settingsOuterView: {
    width: "60%"
  },
  settingsInnerView: {
    height: 200,
    backgroundColor: "#F2D26B",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  resetButton: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingTop: 20,
    paddingBottom: 20,
    height: "auto",
    width: "100%",
    backgroundColor: "#000",
    opacity: 0.8
  },
  resetText: {
    color: "#fff"
  }
});
