import React, { FC } from "react";
import { Text } from "react-native";

import AppText from "./AppText";
import { COLORS, FONT } from "../../constants";

interface IPropTypes {
  size?: number;
  color?: string;
  children: React.ReactNode;
  style?: {};
}

const HeaderText: FC<IPropTypes> = ({
  style,
  color = COLORS.white,
  size = 20,
  children,
}) => {
  return (
    <AppText>
      <Text
        style={[
          {
            fontFamily: FONT.bold,
            fontSize: size,
            color: color,
          },
          { ...style },
        ]}
      >
        {children}
      </Text>
    </AppText>
  );
};

export default HeaderText;
