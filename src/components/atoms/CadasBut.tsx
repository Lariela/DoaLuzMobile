import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";

// Definimos o que o botão de cadastro precisa receber
interface CadasButProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  color?: string; // Cor opcional, caso queira mudar depois
}

export default function CadasBut({
  title,
  onPress,
  color = "#6CBAA9",
}: CadasButProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 12, // Bordas arredondadas conforme seu design
    paddingVertical: 16,
    alignItems: "center",
    width: "100%",
    marginTop: 15,
    // Sombra para dar o efeito de elevação do seu Dashboard
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  text: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 16,
    letterSpacing: 0.5,
  },
});
