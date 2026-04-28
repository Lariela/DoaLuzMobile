import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

// Sub-componente para os Cards (Pode ser movido para um arquivo próprio depois)
const CardNecessidade = ({ title, progresso }: { title: string, progresso: number }) => (
  <View style={styles.card}>
    <View>
      <Text style={styles.badge}>URGENTE</Text>
      <Text style={styles.cardTitle}>{title}</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: `${progresso}%` }]} />
      </View>
      <Text style={styles.progressText}>{progresso}% da meta atingida</Text>
    </View>
    <TouchableOpacity style={styles.cardButton}>
      <Text style={styles.cardButtonText}>Ajudar Agora</Text>
    </TouchableOpacity>
  </View>
);

export default function CategoriaScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headerRow}>
        <View style={styles.iconCircle}>
          <Text style={{ fontSize: 24 }}>🍎</Text>
        </View>
        <View>
          <Text style={styles.title}>
            Banco de <Text style={styles.highlight}>Alimentos</Text>
          </Text>
          <Text style={styles.subtitle}>Itens de cesta básica e perecíveis.</Text>
        </View>
      </View>
      
      <View style={styles.listContainer}>
        <CardNecessidade title="15 Cestas Básicas" progresso={40} />
        <CardNecessidade title="Leite em Pó" progresso={10} />
        <CardNecessidade title="Arroz e Feijão" progresso={85} />
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FBFB',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    gap: 16,
  },
  iconCircle: {
    width: 60,
    height: 60,
    backgroundColor: '#F0F7F5',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#161A19',
  },
  highlight: {
    color: '#76BBAD',
  },
  subtitle: {
    fontSize: 13,
    color: '#888',
  },
  listContainer: {
    padding: 20,
    gap: 16,
  },
  // Estilos do Card (Reutilizados da Home)
  card: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  badge: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#76BBAD',
    backgroundColor: '#F0F7F5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#161A19',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    marginTop: 15,
  },
  progress: {
    height: '100%',
    backgroundColor: '#76BBAD',
    borderRadius: 10,
  },
  progressText: {
    fontSize: 11,
    color: '#AAA',
    marginTop: 6,
    textAlign: 'right',
  },
  cardButton: {
    backgroundColor: '#76BBAD',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 15,
  },
  cardButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});