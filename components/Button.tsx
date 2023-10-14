import { View, Text, Pressable } from "react-native";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  background: string;
  color: string;
  size: string;
};

const Button = ({ children, background, color, size }: ButtonProps) => {
  return (
    <Pressable className={`${background} py-3 px-8 active:opacity-80`}>
      <Text className={`${color} ${size}`}>{children}</Text>
    </Pressable>
  );
};

export default Button;
