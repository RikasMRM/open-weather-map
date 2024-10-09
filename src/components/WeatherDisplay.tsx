import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { WeatherData } from "../types/weather";

interface Props {
  weatherData: WeatherData | null;
}

const WeatherDisplay: React.FC<Props> = ({ weatherData }) => {
  if (!weatherData) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.location}>{weatherData.location}</Text>
      <Image
        style={styles.icon}
        source={{
          uri: `http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`,
        }}
      />
      <Text style={styles.temperature}>
        {weatherData.temperature.toFixed(1)}°C
      </Text>
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
  icon: {
    width: 100,
    height: 100,
  },
  temperature: {
    fontSize: 48,
    fontWeight: "bold",
  },
  description: {
    fontSize: 24,
    marginTop: 10,
    textTransform: "capitalize",
  },
});

export default WeatherDisplay;
