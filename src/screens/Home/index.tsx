import React from "react";
import { Appbar } from "react-native-paper";
import HomeScreenContainer from "../../containers/HomeScreenContainer";

const HomeScreen = (): React.ReactElement => (
  <>
    <Appbar.Header>
      <Appbar.Action icon="refresh" onPress={() => {}} />
      <Appbar.Content title="ETH Test" />
      <Appbar.Action icon="cog" onPress={() => {}} />
    </Appbar.Header>
    <HomeScreenContainer />
  </>
);

export default HomeScreen;
