import { Text } from "react-native";
import React, { FC } from "react";

import { COLORS, FONT } from "../../constants";

interface IPropTypes {
  size?: number;
  color?: string;
  children: React.ReactNode;
  style?: {};
}

const AppText: FC<IPropTypes> = ({ style, color = COLORS.white, size, children }) => {
  return (
    <Text
      style={[
        {
          fontFamily: FONT.medium,
          fontSize: size,
          color: color,
        },
        { ...style },
      ]}
    >
      {children}
    </Text>
  );
};

export default AppText;
