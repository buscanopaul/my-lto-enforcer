import { View, Text, Image, Pressable } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";
import Button from "../../components/Button";
import { StatusBar } from "expo-status-bar";
import Title from "../../components/Title";
import Paragraph from "../../components/Paragraph";

type Props = {};

const OnboardingScreen = (props: Props) => {
  return (
    <View className="h-full">
      <StatusBar hidden />
      <View className="h-[60%]">
        <Image
          source={require("../../assets/images/logo-lto.png")}
          className="h-[500px] w-[500px] absolute -right-[100px]"
        />
      </View>
      <View className="h-[40%] px-10 pr-14">
        <Title size="text-4xl" weight="font-semibold" color="text-black">
          Hire the best
        </Title>
        <View className="mb-2" />
        <Title size="text-4xl" weight="font-semibold" color="text-black">
          employees
        </Title>
        <View className="mb-2" />
        <Title size="text-4xl" weight="font-semibold" color="text-black">
          globally.
        </Title>
        <View className="flex flex-row items-center justify-between mt-10">
          <Button background="bg-black" color="text-white" size="text-lg">
            Get started
          </Button>
          <Pressable className="active:opacity-80">
            <Paragraph
              color="text-black"
              weight="font-normal"
              size="text-[16px]"
            >
              Already have an {"\n"}account? Log in
            </Paragraph>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default OnboardingScreen;
