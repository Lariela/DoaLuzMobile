import React from "react";
import { StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import TelaCadas from "@/src/components/organisms/TelaCadas";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <TelaCadas />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
