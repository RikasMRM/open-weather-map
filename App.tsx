import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";
import WeatherScreen from "./src/screens/WeatherScreen";

export default function App() {
  return (
    <Provider store={store}>
      <WeatherScreen />
    </Provider>
  );
}
