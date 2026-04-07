import React from "react";
import { TextInput, StyleSheet, TextInputProps, View } from "react-native";

// Interface para o TypeScript não reclamar das propriedades
interface EmailInputProps extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

export default function EmailInput({
  placeholder,
  secureTextEntry = false,
  value,
  onChangeText,
  ...rest // Pega qualquer outra propriedade padrão do TextInput
}: EmailInputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#7A8C99"
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
      autoCapitalize="none"
      keyboardType={secureTextEntry ? "default" : "email-address"}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#F8FAFB", // Cinza clarinho do design Doa Luz
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: "#EDF1F3",
    fontSize: 16,
    marginBottom: 12,
    width: "100%",
    color: "#1A2D42",
  },
});
