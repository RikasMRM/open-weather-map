import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { WeatherData } from "../types/weather";

interface Props {
  weatherData: WeatherData | null;
}

const WeatherDisplay: React.FC<Props> = ({ weatherData }) => {
  if (!weatherData) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.location}>{weatherData.location}</Text>
      <Text style={styles.temperature}>{weatherData.temperature}°C</Text>
      <Text style={styles.description}>{weatherData.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  location: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  temperature: {
    fontSize: 48,
    fontWeight: "bold",
  },
  description: {
    fontSize: 24,
    marginTop: 10,
  },
});

export default WeatherDisplay;
