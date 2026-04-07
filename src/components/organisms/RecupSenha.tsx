import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// Importando os átomos que você já criou
import EmailInput from "../atoms/EmailInput";
import LoginBut from "../atoms/LoginBut"; // Podemos reutilizar o átomo de botão

export default function RecupSenha() {
  const [email, setEmail] = useState("");

  const handleRecuperar = () => {
    console.log(`Solicitando recuperação para: ${email}`);
    // Aqui entraria a lógica de integração com o backend
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Senha</Text>

      <Text style={styles.description}>
        Insira o e-mail associado à sua conta e enviaremos as instruções para
        redefinir sua senha.
      </Text>

      <EmailInput
        placeholder="Seu e-mail cadastrado"
        value={email}
        onChangeText={setEmail}
      />

      <LoginBut
        title="Enviar Instruções"
        onPress={handleRecuperar}
        color="#6CBAA9" // Verde-água da sua paleta
      />

      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backText}>Voltar para o Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#F4F7F6",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1A2D42",
    textAlign: "center",
    marginBottom: 10,
    fontFamily: "Inter",
  },
  description: {
    fontSize: 14,
    color: "#7A8C99",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 20,
    fontFamily: "Inter",
  },
  backButton: {
    marginTop: 20,
    alignItems: "center",
  },
  backText: {
    color: "#8DAEC2", // Azul secundário da sua paleta
    fontWeight: "600",
    fontSize: 14,
  },
});
