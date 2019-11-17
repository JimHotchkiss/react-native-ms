import React from "react";
import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";

const UserButton = props => {
  return (
    <TouchableOpacity
      onPress={props.usersPick.bind(this, props.name)}
      activeOpacity={0.5}
      style={styles.userButton}
    >
      <View>
        <Text style={styles.buttonText}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserButton;

const styles = StyleSheet.create({
  userButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    margin: 7,
    paddingTop: 20,
    paddingBottom: 20,
    height: "auto",
    width: "60%",
    backgroundColor: "#F2D26B"
  },
  buttonText: {
    fontWeight: "bold"
  }
});
