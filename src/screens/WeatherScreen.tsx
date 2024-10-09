import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchWeather } from "../store/weatherSlice";
import WeatherDisplay from "../components/WeatherDisplay";

const WeatherScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.weather);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch, refreshKey]);

  const handleRefresh = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <View>
          <Text style={styles.error}>{error}</Text>
          <Text>
            Please check your internet connection and location permissions.
          </Text>
        </View>
      ) : (
        <WeatherDisplay weatherData={data} />
      )}
      <Button title="Refresh" onPress={handleRefresh} disabled={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  error: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
});

export default WeatherScreen;
