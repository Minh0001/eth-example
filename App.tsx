import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import HomeScreen from "./src/screens/Home";

export default function App() {
  return (
    <PaperProvider>
      <HomeScreen />
    </PaperProvider>
  );
}
