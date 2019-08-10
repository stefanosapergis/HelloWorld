import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [time, setTime] = useState(0);

  setInterval(() => {
  

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    setTime(hours + ":" + minutes + ":" + seconds);
  }, 1000);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#228B22",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#fff",
    fontSize: 80
  }
});
