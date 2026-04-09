import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

export default function Home() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* HERO / BANNER */}
      <View style={styles.hero}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
          }}
          style={styles.heroImage}
        />
        <View style={styles.overlay}>
          <Text style={styles.title}>
            Sua doação gera{"\n"}
            <Text style={styles.highlight}>impacto real</Text>
          </Text>
          <Text style={styles.subtitle}>
            Conectamos doadores a famílias de forma organizada
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Quero Doar Agora</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* SEÇÃO NECESSIDADES */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Necessidades Atuais</Text>
        <Text style={styles.sectionSubtitle}>
          Pequenos gestos criam grandes mudanças.
        </Text>

        <View style={styles.cardsContainer}>
          {/* CARD 1 */}
          <View style={styles.card}>
            <View>
              <Text style={styles.badge}>URGENTE</Text>
              <Text style={styles.cardTitle}>15 Cestas Básicas</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progress, { width: "40%" }]} />
              </View>
            </View>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>Ajudar Agora</Text>
            </TouchableOpacity>
          </View>

          {/* CARD 2 */}
          <View style={styles.card}>
            <View>
              <Text style={styles.badge}>EDUCAÇÃO</Text>
              <Text style={styles.cardTitle}>Kits Escolares</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progress, { width: "70%" }]} />
              </View>
            </View>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>Ajudar Agora</Text>
            </TouchableOpacity>
          </View>

          {/* CARD 3 - ARRUMADO */}
          <View style={styles.card}>
            <View>
              <Text style={styles.badge}>VESTUÁRIO</Text>
              <Text style={styles.cardTitle}>Agasalhos</Text>
              {/* Barra de progresso para manter o padrão visual */}
              <View style={styles.progressBar}>
                <View style={[styles.progress, { width: "60%" }]} />
              </View>
            </View>
            <TouchableOpacity style={styles.cardButton}>
              <Text style={styles.cardButtonText}>Ajudar Agora</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* CTA FINAL */}
      <View style={styles.cta}>
        <View style={{ flex: 1, marginRight: 10 }}>
          <Text style={styles.ctaTitle}>É uma Instituição?</Text>
          <Text style={styles.ctaText}>
            Cadastre suas necessidades e receba doações.
          </Text>
        </View>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
      
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f7f5",
  },
  hero: {
    height: 250,
    margin: 16,
    borderRadius: 25,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    padding: 20,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "900",
  },
  highlight: {
    color: "#76bbad",
  },
  subtitle: {
    color: "#eee",
    fontSize: 14,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#76bbad",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  section: {
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#161a19",
  },
  sectionSubtitle: {
    color: "#888",
    fontSize: 13,
    marginBottom: 15,
  },
  cardsContainer: {
    gap: 15,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#f0f0f0",
    minHeight: 170, // Altura padronizada para todos os cards
    justifyContent: "space-between", 
  },
  badge: {
    fontSize: 10,
    color: "#76bbad",
    fontWeight: "bold",
    letterSpacing: 1,
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#161a19",
  },
  progressBar: {
    height: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginTop: 15,
  },
  progress: {
    height: "100%",
    backgroundColor: "#76bbad",
    borderRadius: 10,
  },
  cardButton: {
    backgroundColor: "#76bbad",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  cardButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  cta: {
    backgroundColor: "#8daec2",
    margin: 16,
    padding: 20,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  ctaTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  ctaText: {
    color: "#e0e0e0",
    fontSize: 12,
  },
  ctaButton: {
    backgroundColor: "#76bbad",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 12,
  },
  ctaButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
});