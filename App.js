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
import ShowSettings from "./components/ShowSettings";
import { Header } from "react-native-elements";

class App extends Component {
  constructor() {
    super();
    this.state = {
      consoles: [
        { id: "1688", name: "1688", stateObject: "ccus" },
        { id: "1588", name: "1588", stateObject: "ccus" },
        { id: "PrecisionAC", name: "Precision AC", stateObject: "ccus" },
        { id: "1488", name: "1488", stateObject: "ccus" },
        { id: "1288", name: "1288", stateObject: "ccus" },
        { id: "1188", name: "1188", stateObject: "ccus" }
      ],
      userPicks: [],
      showSettings: false
    };
  }

  render() {
    const usersPick = items => {
      const picks = this.state.userPicks.slice();
      picks.push(items.name);
      // Per documentation, create a callback function to update state synchronously
      this.setState({ userPicks: picks }, () => {
        return this.state.userPicks;
      });
      if (items.stateObject == "ccus") {
        this.setState({
          consoles: [
            { id: "4K", name: "4K", stateObject: "monitors" },
            { id: "VisioPro", name: "VisionPro", stateObject: "monitors" },
            { id: "VisionElect", name: "VisionElect", stateObject: "monitors" }
          ]
        });
      } else if (items.stateObject === "monitors") {
        this.setState({
          consoles: [
            { id: "LapA", name: "Lap A", stateObject: "specialties" },
            { id: "LapB", name: "Lap B", stateObject: "specialties" },
            { id: "sdf", name: "Lap A", stateObject: "specialties" },
            { id: "lkj", name: "Lap B", stateObject: "specialties" },
            { id: "234", name: "Lap A", stateObject: "specialties" },
            { id: "kro", name: "Lap B", stateObject: "specialties" },
            { id: "mwe", name: "Lap A", stateObject: "specialties" },
            { id: "oki", name: "Lap B", stateObject: "specialties" },
            { id: "xnms", name: "Lap A", stateObject: "specialties" },
            { id: "pli", name: "Lap B", stateObject: "specialties" }
          ]
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

    const { showSettings } = this.state;
    return (
      <ImageBackground
        source={require("./assets/operating-room.jpg")}
        style={styles.container}
      >
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "Money Settings", style: { color: "#fff" } }}
          rightComponent={{ icon: "home", color: "#fff" }}
          containerStyle={{
            backgroundColor: "#000",
            opacity: 0.6
          }}
        />
        <View style={styles.picksView}>
          {userPicksArray.length ? userPicksArray : <Text>User Picks</Text>}
        </View>

        {showSettings ? <ShowSettings /> : buttonView()}
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
