import React, { createContext, useContext, useState } from "react";
import Constants from "expo-constants";

type IAddressContext = [string, React.Dispatch<React.SetStateAction<string>>];

const defaultETHAddress = Constants?.manifest?.extra?.defaultETHAddress;

const ETHAddressContext = createContext<IAddressContext>([
  defaultETHAddress,
  () => {},
]);

type ETHAddressProviderProps = {
  children: React.ReactChildren;
};

export const ETHAddressProvider = ({
  children,
}: ETHAddressProviderProps): React.ReactElement => {
  const [address, setAddress] = useState<string>(defaultETHAddress);

  return (
    <ETHAddressContext.Provider value={[address, setAddress]}>
      {children}
    </ETHAddressContext.Provider>
  );
};

export const useAddressContext = () => {
  return useContext(ETHAddressContext);
};

export default ETHAddressContext;
