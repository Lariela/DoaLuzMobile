import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

// Importando seus componentes
import Login from "../molecules/Login";
import LoginBut from "../atoms/LoginBut";
import Logo from "../atoms/Logo";

export default function TelaLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Logo />

        <View style={styles.headerText}>
          <Text style={styles.title}>Bem-vindo de Volta</Text>
          <Text style={styles.subtitle}>Acesse sua conta Doa Luz</Text>
        </View>

        <Login
          email={email}
          setEmail={setEmail}
          senha={senha}
          setSenha={setSenha}
        />

        <LoginBut title="Entrar" onPress={() => console.log("Login")} />

        <TouchableOpacity style={styles.forgotPass}>
          <Text style={styles.forgotText}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}> Não tem uma conta? </Text>
          <TouchableOpacity>
            <Text style={styles.signupText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
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
    paddingTop: 60, // Substitui o SafeAreaView dando um espaço no topo
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1A2D42",
  },
  subtitle: {
    fontSize: 16,
    color: "#7A8C99",
    marginTop: 5,
  },
  forgotPass: {
    marginTop: 15,
  },
  forgotText: {
    color: "#8DAEC2",
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    marginTop: 40,
  },
  footerText: {
    color: "#7A8C99",
    fontSize: 14,
  },
  signupText: {
    color: "#6CBAA9",
    fontWeight: "bold",
    fontSize: 14,
  },
});
