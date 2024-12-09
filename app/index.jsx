import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import React from "react";

const index = () => {
  return (
    <View>
      <Text className="text-2xl font-pblack">Aora!</Text>
      <Link href="home">HOME</Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
