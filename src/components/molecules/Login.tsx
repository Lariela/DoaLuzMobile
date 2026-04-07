import React from "react";
import { View, StyleSheet } from "react-native";
import EmailInput from "../atoms/EmailInput";
import SenhaInput from "../atoms/SenhaInput";

interface Props {
  email: string;
  setEmail: (t: string) => void;
  senha: string;
  setSenha: (t: string) => void;
}

export default function Login({ email, setEmail, senha, setSenha }: Props) {
  return (
    <View style={styles.molecule}>
      <EmailInput value={email} onChangeText={setEmail} placeholder="E-mail" />
      <SenhaInput value={senha} onChangeText={setSenha} placeholder="Senha" />
    </View>
  );
}

const styles = StyleSheet.create({
  molecule: { width: "100%", gap: 10, marginBottom: 20 },
});
