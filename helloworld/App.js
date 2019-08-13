import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let days = date.getUTCDate();

  let months = date.getUTCMonth() + 1;

  let years = date.getUTCFullYear();

  if (minutes <= 9) {
    minutes = "0" + minutes;
  }
  if (hours <= 9) {
    hours = "0" + hourss;
  }

  if (seconds <= 9) {
    seconds = "0" + seconds;
  }

  if (months < 10) {
    months = "0" + months;
  }

  if (days < 10) {
    days = "0" + days;
  }

  const [time, setTime] = useState(hours + ":" + minutes + ":" + seconds);
  const [dmy, setDmy] = useState(days + "/" + months + "/" + years);

  setInterval(() => {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let days = date.getUTCDate();
    let months = date.getUTCMonth() + 1;
    let years = date.getUTCFullYear();
    if (minutes <= 9) {
      minutes = "0" + minutes;
    }
    if (hours <= 9) {
      hours = "0" + hourss;
    }
  
    if (seconds <= 9) {
      seconds = "0" + seconds;
    }
  
    if (months < 10) {
      months = "0" + months;
    }
  
    if (days < 10) {
      days = "0" + days;
    }

    setTime(hours + ":" + minutes + ":" + seconds);
    setDmy(days + "/" + months + "/" + years);
  }, 1000);

  return (
    <View style={styles.container}>
      <Text style={styles.hours}>{time}</Text>
      <Text style={styles.days}>{dmy}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  },
  hours: {
    color: "#fff",
    fontSize: 80
  },
  days: {
    fontSize: 40,
    color: "#ADFF2F"
  }
});
