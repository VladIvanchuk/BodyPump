import { Text } from "react-native";
import React, { FC } from "react";

import { COLORS, FONT } from "../../constants";

interface IPropTypes {
  size?: number;
  color?: string;
  children: React.ReactNode;
  style?: {};
  numberOfLines?: number;
}

const AppText: FC<IPropTypes> = ({
  style,
  color = COLORS.white,
  size,
  children,
  numberOfLines,
}) => {
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
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

export default AppText;
