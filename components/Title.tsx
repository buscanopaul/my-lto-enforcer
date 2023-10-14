import { View, Text } from "react-native";
import React from "react";

type TitleProps = {
  children: React.ReactNode;
  size: string;
  color: string;
  weight: string;
};

const Title = ({ children, size, color, weight }: TitleProps) => {
  return <Text className={`${size} ${color} ${weight}`}>{children}</Text>;
};

export default Title;
