import React from "react";
import { Text, View } from "react-native";
import ETHBalance from "../../containers/ETHBalance";
import ETHHeight from "../../containers/ETHHeight";
import { useAddressContext } from "../../contexts/ETHAddress";

const HomeScreenContainer = (): React.ReactElement => {
  const [address] = useAddressContext();

  return (
    <View>
      <View>
        <Text>Address</Text>
        <Text>{address}</Text>
      </View>
      <View>
        <Text>Height</Text>
        <ETHHeight />
      </View>
      <View>
        <Text>Balance</Text>
        <ETHBalance address={address} />
      </View>
    </View>
  );
};

export default HomeScreenContainer;
