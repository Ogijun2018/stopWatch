import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class DetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Detail Screen</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <Text>Go to Home Screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});