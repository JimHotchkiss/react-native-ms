import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

const ShowSettings = props => {
  console.log("this is props:", props.practiceProps);
  return (
    <View style={styles.showView}>
      <Text>CCU</Text>
      {props.practiceProps.sixteenParams.map(setting => {
        return (
          <View key={setting} style={styles.textView}>
            <Text style={styles.showText}>{setting}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default ShowSettings;

const styles = StyleSheet.create({
  showView: {
    backgroundColor: "#F2D26B",
    height: "auto"
  },
  textView: {
    borderBottomColor: "#000",
    borderBottomWidth: 1
  },
  showText: {
    padding: 10
  }
});
