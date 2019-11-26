import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ScrollView
} from "react-native";
import UserButton from "./components/UserButton";
import UserPicks from "./components/UserPicks";
import Parameters from "./components/Parameters";
import { Header } from "react-native-elements";

class App extends Component {
  constructor() {
    // Pulling initial data from local api
    const ccuData = require("./assets/consoles/ccus.json");
    const cameras = ccuData.cameras;

    super();
    this.state = {
      consoles: cameras,
      userPicks: [],
      showSettings: false
    };
  }

  render() {
    // data - monitors and specialties
    const monitorData = require("./assets/consoles/monitors.json");
    const monitors = monitorData.monitors;
    const specialtyData = require("./assets/consoles/specialties.json");
    const specialties = specialtyData.specialties;
    const sixteenSettings = require("./assets/settings/sixteen.json");

    const usersPick = item => {
      const picks = this.state.userPicks.slice();
      picks.push(item.name);
      // Per documentation, create a callback function to update state synchronously
      this.setState({ userPicks: picks }, () => {
        return this.state.userPicks;
      });
      if (item.stateObject == "ccus") {
        this.setState({ consoles: monitors });
      } else if (item.stateObject === "monitors") {
        this.setState({
          consoles: specialties
        });
      } else {
        this.setState({ showSettings: true });
      }
    };
    // UserPicks array
    let userPicksArray = this.state.userPicks.map(pick => {
      return <UserPicks key={pick} pickTitle={pick} />;
    });
    const buttonView = () => {
      return (
        <ScrollView style={styles.scrollView}>
          {this.state.consoles.map(item => {
            return (
              <UserButton
                stateObject={item.stateObject}
                key={item.id}
                name={item.name}
                usersPick={usersPick.bind(this, item)}
              />
            );
          })}
        </ScrollView>
      );
    };

    const parameterView = () => {
      if (this.state.userPicks[0] === "1688") {
        return <Parameters settings={sixteenSettings} />;
      } else {
        return <Text>Legacy </Text>;
      }
    };

    const { showSettings } = this.state;
    return (
      <ImageBackground
        source={require("./assets/operating-room.jpg")}
        style={styles.container}
      >
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "Money Settings", style: { color: "#fff" } }}
          rightComponent={{
            icon: "home",
            color: "#fff",
            onPress: () => alert("sup")
          }}
          containerStyle={{
            backgroundColor: "#000",
            opacity: 0.6
          }}
        />
        <View style={styles.picksView}>
          {userPicksArray.length ? userPicksArray : <Text>User Picks</Text>}
        </View>

        {showSettings ? parameterView() : buttonView()}
      </ImageBackground>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    flexDirection: "column",
    backgroundColor: "transparent",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  scrollView: {
    flex: 1,
    width: "100%",
    marginLeft: 135
  },
  picksView: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row"
  }
});
