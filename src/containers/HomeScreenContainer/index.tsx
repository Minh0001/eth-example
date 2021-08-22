import React from "react";
import { useState } from "react";
import { List } from "react-native-paper";
import ETHBalance from "../../containers/ETHBalance";
import ETHHeight from "../../containers/ETHHeight";
import { useAddressContext } from "../../contexts/ETHAddress";

const HomeScreenContainer = (): React.ReactElement => {
  const [address] = useAddressContext();
  const [refreshHeight, setRefreshHeight] = useState(false);
  const [refreshBalance, setRefreshBalance] = useState(false);

  return (
    <>
      <List.Accordion
        expanded
        title="Address"
        left={() => <List.Icon icon="folder" />}
      >
        <List.Item title={address} />
      </List.Accordion>
      <List.Accordion
        expanded
        title="Height"
        left={() => <List.Icon icon="folder" />}
      >
        <List.Item
          title={
            <ETHHeight
              refresh={refreshHeight}
              afterRefresh={() => setRefreshHeight(false)}
            />
          }
          left={() => <List.Icon icon="refresh" />}
          onPress={() => setRefreshHeight(true)}
        />
      </List.Accordion>
      <List.Accordion
        expanded
        title="Balance"
        left={() => <List.Icon icon="folder" />}
      >
        <List.Item
          title={
            <ETHBalance
              address={address}
              refresh={refreshBalance}
              afterRefresh={() => setRefreshBalance(false)}
            />
          }
          left={() => <List.Icon icon="refresh" />}
          onPress={() => setRefreshBalance(true)}
        />
      </List.Accordion>
    </>
  );
};

export default HomeScreenContainer;
