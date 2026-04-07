import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import Logo from "../atoms/Logo";
import Cadas from "../molecules/Cadas";
import CadasBut from "../atoms/CadasBut";

export default function TelaCadas() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Logo />

        <View style={styles.headerText}>
          <Text style={styles.title}>Criar Conta</Text>
          <Text style={styles.subtitle}>
            Junte-se ao Doa Luz e ajude o próximo
          </Text>
        </View>

        <View style={styles.formArea}>
          <Cadas
            nome={nome}
            setNome={setNome}
            email={email}
            setEmail={setEmail}
            senha={senha}
            setSenha={setSenha}
          />
        </View>

        <CadasBut
          title="Finalizar Cadastro"
          onPress={() => console.log("Cadastro:", nome)}
        />

        <View style={styles.termsArea}>
          <Text style={styles.termsText}>
            Ao se cadastrar, você concorda com nossos{" "}
            <Text style={styles.bold}>Termos de Uso</Text>.
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Já tem uma conta? </Text>
          <TouchableOpacity>
            <Text style={styles.loginText}>Faça Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7F6",
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 30,
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "700", // Peso numérico é mais estável entre Android/iOS
    color: "#1A2D42",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400", // Garante que o subtítulo não herde negrito
    color: "#7A8C99",
    marginTop: 8,
    textAlign: "center",
  },
  formArea: {
    width: "100%",
  },
  termsArea: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  termsText: {
    fontSize: 13,
    color: "#7A8C99",
    textAlign: "center",
    lineHeight: 18,
  },
  bold: {
    fontWeight: "700",
    color: "#1A2D42",
  },
  footer: {
    flexDirection: "row",
    marginTop: 40,
    alignItems: "center",
  },
  footerText: {
    color: "#7A8C99",
    fontSize: 15,
  },
  loginText: {
    color: "#6CBAA9",
    fontWeight: "700",
    fontSize: 15,
  },
});
