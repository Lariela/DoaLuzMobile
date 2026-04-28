import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar
} from "react-native";
// Importando os ícones - Verifique se todos estão aqui
import { Apple, GraduationCap, Shirt, Baby, Sofa } from "lucide-react-native";

export default function Home() {
  const [filtroAtivo, setFiltroAtivo] = useState("Tudo");

  // LISTA COM 5 CARDS PARA TESTAR O FILTRO
  const cards = [
    {
      id: 1,
      categoria: "Alimentos",
      titulo: "15 Cestas Básicas",
      porcentagem: "40%",
      icone: <Apple color="#76bbad" size={20} />,
      urgente: true,
    },
    {
      id: 2,
      categoria: "Educação",
      titulo: "Kits Escolares",
      porcentagem: "70%",
      icone: <GraduationCap color="#76bbad" size={20} />,
      urgente: false,
    },
    {
      id: 3,
      categoria: "Roupas",
      titulo: "Agasalhos Infantis",
      porcentagem: "60%",
      icone: <Shirt color="#76bbad" size={20} />,
      urgente: false,
    },
    {
      id: 4,
      categoria: "Higiene",
      titulo: "Kits de Higiene",
      porcentagem: "30%",
      icone: <Baby color="#76bbad" size={20} />,
      urgente: true,
    },

  ];

  const cardsFiltrados = cards.filter(card => 
    filtroAtivo === "Tudo" || card.categoria === filtroAtivo
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* HERO / BANNER */}
        <View style={styles.hero}>
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1509099836639-18ba1795216d" }}
            style={styles.heroImage}
          />
          <View style={styles.overlay}>
            <Text style={styles.title}>Fortalecendo a{"\n"}<Text style={styles.highlight}>comunidade local</Text></Text>
            <Text style={styles.subtitle}>Conectamos doadores a famílias de forma organizada.</Text>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Quero Doar Agora</Text></TouchableOpacity>
          </View>
        </View>

        {/* SEÇÃO PRINCIPAL */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Necessidades Atuais</Text>
          <Text style={styles.sectionSubtitle}>Pequenos gestos criam grandes mudanças.</Text>

          {/* FILTROS FUNCIONAIS */}
          <View style={styles.filterWrapper}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {["Tudo", "Alimentos", "Roupas", "Educação", "Higiene"].map((cat) => (
                <TouchableOpacity
                  key={cat}
                  onPress={() => setFiltroAtivo(cat)}
                  style={[styles.filterBtn, filtroAtivo === cat && styles.filterBtnActive]}
                >
                  <Text style={[styles.filterText, filtroAtivo === cat && styles.filterTextActive]}>{cat}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* LISTA DINÂMICA */}
          <View style={styles.cardsContainer}>
            {cardsFiltrados.map((item) => (
              <View key={item.id} style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={item.urgente ? styles.badgeUrgent : styles.badgeNormal}>
                    {item.categoria.toUpperCase()}
                  </Text>
                  {item.icone}
                </View>
                <Text style={styles.cardTitle}>{item.titulo}</Text>
                <View style={styles.progressRow}>
                  <View style={styles.progressBar}>
                    <View style={[styles.progressFill, {width: item.porcentagem}]} />
                  </View>
                  <Text style={styles.percentText}>{item.porcentagem}</Text>
                </View>
                <TouchableOpacity style={styles.cardButton}><Text style={styles.cardButtonText}>Ajudar Agora</Text></TouchableOpacity>
              </View>
            ))}
          </View>
        </View>

        {/* CTA FINAL (AZUL) */}
        <View style={styles.cta}>
          <View style={{ flex: 1 }}>
            <Text style={styles.ctaTitle}>É uma Instituição?</Text>
            <Text style={styles.ctaText}>Cadastre suas necessidades e receba doações.</Text>
          </View>
          <TouchableOpacity style={styles.ctaButton}><Text style={styles.ctaButtonText}>Cadastrar</Text></TouchableOpacity>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f0f7f5" },
  container: { flex: 1 },
  hero: { height: 250, margin: 16, borderRadius: 25, overflow: "hidden" },
  heroImage: { width: "100%", height: "100%" },
  overlay: { ...StyleSheet.absoluteFillObject, padding: 20, justifyContent: "center", backgroundColor: "rgba(0,0,0,0.4)" },
  title: { fontSize: 24, color: "#fff", fontWeight: "900" },
  highlight: { color: "#76bbad" },
  subtitle: { color: "#eee", fontSize: 14, marginVertical: 10 },
  button: { backgroundColor: "#76bbad", paddingHorizontal: 20, paddingVertical: 12, borderRadius: 12, alignSelf: "flex-start" },
  buttonText: { color: "#fff", fontWeight: "bold" },
  section: { paddingHorizontal: 16 },
  sectionTitle: { fontSize: 22, fontWeight: "bold", color: "#161a19" },
  sectionSubtitle: { color: "#888", fontSize: 13, marginBottom: 15 },
  filterWrapper: { marginBottom: 20 },
  filterBtn: { paddingHorizontal: 18, paddingVertical: 8, borderRadius: 20, backgroundColor: "#fff", marginRight: 10, borderWidth: 1, borderColor: "#eee" },
  filterBtnActive: { backgroundColor: "#76bbad", borderColor: "#76bbad" },
  filterText: { color: "#666", fontWeight: "600", fontSize: 13 },
  filterTextActive: { color: "#fff" },
  cardsContainer: { gap: 15 },
  card: { backgroundColor: "#fff", padding: 20, borderRadius: 20, elevation: 2 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  badgeUrgent: { fontSize: 10, color: "#ff6b6b", fontWeight: "bold", backgroundColor: '#fff0f0', padding: 4, borderRadius: 4 },
  badgeNormal: { fontSize: 10, color: "#76bbad", fontWeight: "bold", backgroundColor: '#f0fbf9', padding: 4, borderRadius: 4 },
  cardTitle: { fontSize: 18, fontWeight: "bold", color: "#161a19" },
  progressRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 15 },
  progressBar: { flex: 1, height: 7, backgroundColor: "#f0f0f0", borderRadius: 10 },
  progressFill: { height: "100%", backgroundColor: "#76bbad", borderRadius: 10 },
  percentText: { fontSize: 11, fontWeight: 'bold', color: '#888' },
  cardButton: { backgroundColor: "#76bbad", padding: 12, borderRadius: 12, alignItems: "center", marginTop: 15 },
  cardButtonText: { color: "#fff", fontWeight: "bold" },
  cta: { backgroundColor: "#8daec2", margin: 16, padding: 20, borderRadius: 25, flexDirection: "row", alignItems: "center" },
  ctaTitle: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  ctaText: { color: "#e0e0e0", fontSize: 12 },
  ctaButton: { backgroundColor: "#76bbad", padding: 12, borderRadius: 12 },
  ctaButtonText: { color: "#fff", fontWeight: "bold", fontSize: 12 },
});