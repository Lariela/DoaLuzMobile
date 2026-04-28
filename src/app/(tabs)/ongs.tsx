import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { MapPin } from 'lucide-react-native';

const ONGS = [
  {
    id: '1',
    nome: 'Fundo Social de Solidariedade',
    local: 'Taubaté - SP',
    imagem: 'https://images.unsplash.com/photo-1593113598332-cd288d649433', // Exemplo
  },
  {
    id: '2',
    nome: 'Comunidade Bom Pastor',
    local: 'Taubaté - SP',
    imagem: 'https://images.unsplash.com/photo-1542810634-7bc278057dc5', // Exemplo
  },
  {
    id: '3',
    nome: 'Expresso Anjos da Cidade/Haja+Amor',
    local: 'Taubaté - SP',
    imagem: 'https://images.unsplash.com/photo-1542810634-7bc278057dc5', // Exemplo
  },
  {
    id: '4',
    nome: 'Paróquia Sagrada Família',
    local: 'Taubaté - SP',
    imagem: 'https://images.unsplash.com/photo-1542810634-7bc278057dc5', // Exemplo
  },
  {
    id: '5',
    nome: 'Igreja da Capital Taubaté',
    local: 'Taubaté - SP',
    imagem: 'https://images.unsplash.com/photo-1542810634-7bc278057dc5', // Exemplo
  },
];

export default function Ongs() {
  return (
    <FlatList
      data={ONGS}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      ListHeaderComponent={() => (
        <View style={styles.header}>
          <Text style={styles.title}>
            Instituições <Text style={styles.highlight}>Parceiras</Text>
          </Text>
          <Text style={styles.subtitle}>
            Conheça as organizações que recebem e distribuem suas doações.
          </Text>
        </View>
      )}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.imagem }} style={styles.image} />
          <View style={styles.cardContent}>
            <Text style={styles.ongName}>{item.nome}</Text>
            <View style={styles.locationRow}>
              <MapPin size={14} color="#76BBAD" />
              <Text style={styles.locationText}>{item.local}</Text>
            </View>
            <TouchableOpacity style={styles.mapButton}>
              <Text style={styles.mapButtonText}>Ver no Mapa</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#F8FBFB',
  },
  header: {
    marginBottom: 24,
    marginTop: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#161A19',
  },
  highlight: {
    color: '#76BBAD',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#EEE',
  },
  cardContent: {
    padding: 16,
  },
  ongName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#161A19',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 16,
  },
  locationText: {
    fontSize: 13,
    color: '#888',
    marginLeft: 4,
  },
  mapButton: {
    borderWidth: 1,
    borderColor: '#76BBAD',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  mapButtonText: {
    color: '#76BBAD',
    fontWeight: 'bold',
    fontSize: 13,
  },
});