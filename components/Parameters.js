import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import ShowSettings from "./ShowSettings";

const Parameters = ({ settings }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.viewContainer}>
        <View style={styles.paramsView}>
          <Text>CCU</Text>
          {settings.sixteenParams.map(param => {
            return (
              <View style={styles.textView} key={param}>
                <Text style={styles.paramsText}>{param}</Text>
              </View>
            );
          })}
        </View>
        <ShowSettings practiceProps={settings} />
      </View>
    </ScrollView>
  );
};
export default Parameters;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: "row"
  },
  paramsView: {
    backgroundColor: "#F2D26B",
    height: "auto"
  },
  textView: {
    borderBottomColor: "#000",
    borderBottomWidth: 1
  },
  paramsText: {
    padding: 10
  }
});
