import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Archive, Handshake, Info } from 'lucide-react-native';

export default function ComoAjudar() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Como Você Pode <Text style={styles.highlight}>Ajudar</Text>
        </Text>
        <Text style={styles.subtitle}>
          Conectamos doadores a instituições por meio de doações materiais.
        </Text>

        {/* CARD DOAR ITENS */}
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Archive color="#76BBAD" size={32} />
          </View>
          <Text style={styles.cardTitle}>Doar Itens</Text>
          <Text style={styles.cardDesc}>
            Contribua com roupas, alimentos e kits escolares para quem mais precisa.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>Ver Necessidades</Text>
          </TouchableOpacity>
        </View>

        {/* CARD VOLUNTARIADO */}
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Handshake color="#76BBAD" size={32} />
          </View>
          <Text style={styles.cardTitle}>Voluntariado</Text>
          <Text style={styles.cardDesc}>
            Doe seu tempo e habilidades para apoiar ações sociais e transformar vidas.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>Quero Ser Voluntário</Text>
          </TouchableOpacity>
        </View>

        {/* BOX DE INFORMAÇÃO */}
        <View style={styles.infoBox}>
          <Info color="#76BBAD" size={20} />
          <Text style={styles.infoText}>
            O Doa Luz não realiza arrecadação financeira diretamente.
          </Text>
        </View>
      </View>
      
      {/* Espaço extra no final */}
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FBFB', // Fundo gelo padrão
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#161A19',
    marginBottom: 8,
    marginTop: 20,
  },
  highlight: {
    color: '#76BBAD',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 32,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    alignItems: 'center', // Centraliza os itens do card
    // Sombra para iOS e Android
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  iconContainer: {
    width: 64,
    height: 64,
    backgroundColor: '#F0F7F5',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#161A19',
    marginBottom: 8,
  },
  cardDesc: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#76BBAD',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  btnText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  infoBox: {
    flexDirection: 'row',
    backgroundColor: '#F0F7F5',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  infoText: {
    flex: 1,
    fontSize: 12,
    color: '#76BBAD',
    fontWeight: '600',
    marginLeft: 12,
  },
});