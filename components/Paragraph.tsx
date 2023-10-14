import { View, Text } from "react-native";
import React from "react";

type Props = {
  children: React.ReactNode;
  color: string;
  weight: string;
  size: string;
};

const Paragraph = ({ children, color, weight, size }: Props) => {
  return <Text className={`${color} ${weight} ${size}`}>{children}</Text>;
};

export default Paragraph;
