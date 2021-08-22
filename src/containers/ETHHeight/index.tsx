import React, { useState } from "react";
import Constants from "expo-constants";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import FormattedNumber from "../../components/FormattedNumber";
import useFetch from "../../hooks/useFetch";
import { InfuraResponseType } from "../../types/infura";
import { BASE_API_URL } from "../../utils/contants";

const ETHHeight = (): React.ReactElement => {
  const body = {
    jsonrpc: "2.0",
    id: 1,
    method: "eth_blockNumber",
    params: [],
  };
  const { result, isLoading, error, request } = useFetch<InfuraResponseType>(
    `${BASE_API_URL}${Constants?.manifest?.extra?.projectId}`,
    {
      method: "POST",
      body: JSON.stringify(body),
    }
  );

  if (isLoading) return <Loading />;

  if (error || !result) return <Error />;

  const height = parseInt(result.result, 16);

  return <FormattedNumber>{height}</FormattedNumber>;
};

export default ETHHeight;
