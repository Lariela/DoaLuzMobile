import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";

// Interface para o TypeScript validar as propriedades
interface SenhaInputProps extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean; // Já deixamos como opcional, mas padrão true
}

export default function SenhaInput({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = true, // Por padrão, esconde a senha
  ...rest
}: SenhaInputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#7A8C99"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      autoCapitalize="none" // Senhas não devem ter auto-capitalização
      autoCorrect={false} // Desativa o corretor para não atrapalhar a senha
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#F8FAFB", // Fundo cinza clarinho (Doa Luz)
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: "#EDF1F3",
    fontSize: 16,
    marginBottom: 12,
    width: "100%",
    color: "#1A2D42",
    fontFamily: "Inter",
  },
});
