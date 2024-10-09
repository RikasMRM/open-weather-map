import * as Location from "expo-location";

export const getCurrentLocation = async (): Promise<{
  latitude: number;
  longitude: number;
}> => {
  console.log("Requesting location permission...");
  let { status } = await Location.requestForegroundPermissionsAsync();
  console.log("Location permission status:", status);

  if (status !== "granted") {
    throw new Error("Permission to access location was denied");
  }

  console.log("Getting current position...");
  let location = await Location.getCurrentPositionAsync({});
  console.log("Current position:", location);

  return {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  };
};
