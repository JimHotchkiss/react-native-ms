import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

const Parameters = ({ settings }) => {
  return (
    <ScrollView>
      <View style={styles.outerView}>
        {settings.sixteenParams.map(param => {
          return (
            <View style={styles.paramsView} key={param}>
              <Text style={styles.paramsText}>{param}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};
export default Parameters;

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    flexDirection: "column"
  },
  paramsView: {
    backgroundColor: "#F2D26B",
    height: "auto",
    width: "100%"
  },
  paramsText: {
    padding: 10
  }
});
