import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";

// Interface para o TypeScript entender as propriedades do Input de Nome
interface NomeInputProps extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export default function NomeInput({
  placeholder,
  value,
  onChangeText,
  ...rest
}: NomeInputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#7A8C99"
      value={value}
      onChangeText={onChangeText}
      autoCapitalize="words" // Coloca a primeira letra de cada nome em maiúscula automaticamente
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#F8FAFB", // Fundo cinza clarinho da paleta Doa Luz
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: "#EDF1F3",
    fontSize: 16,
    marginBottom: 12,
    width: "100%",
    color: "#1A2D42", // Cor do texto principal (Azul marinho escuro)
    fontFamily: "Inter", // Garante que use a fonte do projeto
  },
});
