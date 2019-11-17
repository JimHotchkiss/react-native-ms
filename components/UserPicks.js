import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UserPicks = props => {
  return (
    <Text style={styles.picksText} key={props.pickTitle}>
      {props.pickTitle}{" "}
    </Text>
  );
};

export default UserPicks;

const styles = StyleSheet.create({
  picksText: {
    paddingRight: 10,
    fontSize: 20,
    fontWeight: "bold"
  }
});
