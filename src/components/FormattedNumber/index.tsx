import React from "react";
import { Text } from "react-native";
import numeral from "numeral";

type FormattedNumberProps = {
  children: string | number;
  format?: string;
};

const FormattedNumber = ({
  children,
  format = "0,0",
}: FormattedNumberProps) => <Text>{numeral(children).format(format)}</Text>;

export default FormattedNumber;
