import axios from "axios";
import { WeatherData } from "../types/weather";
import { API_KEY, BASE_URL } from "../utils/constants";
import { getCurrentLocation } from "../utils/location";

export const fetchWeatherData = async (): Promise<WeatherData> => {
  try {
    const { latitude, longitude } = await getCurrentLocation();

    console.log(`Fetching weather for lat: ${latitude}, lon: ${longitude}`);

    const response = await axios.get(
      `${BASE_URL}?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,daily,alerts&units=metric&appid=${API_KEY}`
    );

    console.log("API Response:", response.data);

    return {
      temperature: response.data.current.temp,
      description: response.data.current.weather[0].description,
      location: response.data.timezone,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
      throw new Error(
        `Failed to fetch weather data: ${
          error.response?.data?.message || error.message
        }`
      );
    } else if (error instanceof Error) {
      console.error("Other error:", error.message);
      throw new Error(`Failed to fetch weather data: ${error.message}`);
    }
    console.error("Unknown error:", error);
    throw new Error("Failed to fetch weather data: Unknown error");
  }
};
