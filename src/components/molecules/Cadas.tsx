import React from "react";
import { View, StyleSheet } from "react-native";

// Importando os teus átomos
import NomeInput from "../atoms/NomeInput";
import EmailInput from "../atoms/EmailInput";
import SenhaInput from "../atoms/SenhaInput";

// Interface das propriedades (Props)
interface CadasProps {
  nome: string;
  setNome: (t: string) => void;
  email: string;
  setEmail: (t: string) => void;
  senha: string;
  setSenha: (t: string) => void;
}

export default function Cadas({
  nome,
  setNome,
  email,
  setEmail,
  senha,
  setSenha,
}: CadasProps) {
  return (
    <View style={styles.container}>
      <NomeInput
        placeholder="Nome Completo"
        value={nome}
        onChangeText={setNome}
      />

      <EmailInput placeholder="E-mail" value={email} onChangeText={setEmail} />

      <SenhaInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
