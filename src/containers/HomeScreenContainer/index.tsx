import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { List } from "react-native-paper";
import ETHBalance from "../../containers/ETHBalance";
import ETHHeight from "../../containers/ETHHeight";
import { useAddressContext } from "../../contexts/ETHAddress";

const HomeScreenContainer = (): React.ReactElement => {
  const [address] = useAddressContext();

  return (
    <>
      <List.Accordion expanded title="Address" left={() => <List.Icon icon="folder" />}>
        <List.Item title={address} />
      </List.Accordion>
      <List.Accordion expanded title="Height" left={() => <List.Icon icon="folder" />}>
        <List.Item title={<ETHHeight />} />
      </List.Accordion>
      <List.Accordion expanded title="Balance" left={() => <List.Icon icon="folder" />}>
        <List.Item title={<ETHBalance address={address} />} />
      </List.Accordion>
    </>
  );
};

export default HomeScreenContainer;
