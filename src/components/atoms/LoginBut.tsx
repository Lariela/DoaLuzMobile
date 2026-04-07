import React from "react"; // Sempre bom importar o React
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";

// Definimos a "cara" (interface) das propriedades que o botão aceita
interface LoginButProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  color?: string; // O '?' indica que a cor é opcional
}

export default function LoginBut({
  title,
  onPress,
  color = "#6CBAA9",
}: LoginButProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
      activeOpacity={0.7} // Adiciona um feedback visual ao clicar
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    paddingVertical: 16,
    alignItems: "center",
    width: "100%",
    marginTop: 10,
    // Adicionei uma sombra leve para combinar com o seu design
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 16,
    fontFamily: "Inter", // Já preparando para a sua tipografia
  },
});
