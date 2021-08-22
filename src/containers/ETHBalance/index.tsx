import React, { useEffect } from "react";
import Constants from "expo-constants";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import FormattedNumber from "../../components/FormattedNumber";
import useFetch from "../../hooks/useFetch";
import { InfuraResponseType } from "../../types/infura";
import { BASE_API_URL } from "../../utils/contants";

type ETHBalanceProps = {
  address: string;
  refresh?: boolean;
  afterRefresh?: () => void;
};

const ETHBalance = ({
  address,
  refresh,
  afterRefresh = () => {},
}: ETHBalanceProps): React.ReactElement => {
  const body = {
    jsonrpc: "2.0",
    id: 1,
    method: "eth_getBalance",
    params: [address, "latest"],
  };
  const { result, isLoading, error, request } = useFetch<InfuraResponseType>(
    `${BASE_API_URL}${Constants?.manifest?.extra?.projectId}`,
    {
      method: "POST",
      body: JSON.stringify(body),
    }
  );

  useEffect(() => {
    (async () => {
      if (refresh) {
        await request();
        afterRefresh();
      }
    })();
  }, [refresh]);

  if (isLoading) return <Loading />;

  if (error || !result) return <Error />;

  const balance = parseInt(result.result, 16);

  return <FormattedNumber>{balance}</FormattedNumber>;
};

export default ETHBalance;
