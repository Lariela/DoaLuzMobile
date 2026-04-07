import React from 'react';
// Importamos os componentes básicos do React Native
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Image, 
  StatusBar 
} from 'react-native';
// Importamos ícones de duas bibliotecas diferentes para ter mais variedade
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabHome() {
  return (
    <View style={styles.container}>
      {/* StatusBar configura a cor dos ícones de bateria/hora no topo do celular */}
      <StatusBar barStyle="dark-content" />
      
      {/* 1. SEÇÃO DE HEADER (CABEÇALHO) 
          Usamos uma View com flexDirection 'row' para alinhar texto e sino lado a lado */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Olá, Bem-vindo!</Text>
          <Text style={styles.subtitle}>Como você quer ajudar hoje?</Text>
        </View>
        {/* Botão de Notificação (Sino) */}
        <TouchableOpacity style={styles.notificationBtn}>
          <Feather name="bell" size={24} color="#1A2D42" />
        </TouchableOpacity>
      </View>

      {/* ScrollView permite que a tela role se o conteúdo for maior que o visor */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* 2. CARD DE IMPACTO 
            Exibe as conquistas do usuário. A barra de progresso é feita com duas Views sobrepostas */}
        <View style={styles.impactCard}>
          <Text style={styles.impactTitle}>Seu Impacto no Doa Luz</Text>
          <Text style={styles.impactNumber}>15 Doações</Text>
          {/* Fundo da barra (cinza transparente) */}
          <View style={styles.progressBar}>
            {/* Preenchimento da barra (branco). O width define a porcentagem de conclusão */}
            <View style={[styles.progressFill, { width: '70%' }]} />
          </View>
        </View>

        {/* 3. SEÇÃO DE CATEGORIAS 
            O 'horizontal' permite deslizar os cards para os lados */}
        <Text style={styles.sectionTitle}>Explorar Categorias</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
          <CategoryItem icon="food-apple" label="Alimentos" color="#FFEBEE" />
          <CategoryItem icon="tshirt-crew" label="Roupas" color="#E3F2FD" />
          <CategoryItem icon="medical-bag" label="Saúde" color="#E8F5E9" />
          <CategoryItem icon="book-open-variant" label="Educação" color="#FFF3E0" />
        </ScrollView>

        {/* 4. CAUSAS URGENTES 
            Cards que utilizam imagens externas (URLs do Unsplash) */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Causas Urgentes</Text>
          <TouchableOpacity><Text style={styles.seeAll}>Ver todas</Text></TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <CauseCard 
            title="Campanha do Agasalho" 
            goal="Meta: R$ 5.000" 
            img="https://images.unsplash.com/photo-1532629345422-7515f3d16bb8?w=400"
          />
          <CauseCard 
            title="Alimentos para Abrigo" 
            goal="Meta: R$ 2.500" 
            img="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400"
          />
        </ScrollView>

        {/* 5. LISTA DE INSTITUIÇÕES 
            Cards verticais que simulam uma lista de parceiros próximos */}
        <Text style={styles.sectionTitle}>Instituições Próximas</Text>
        <InstitutionItem name="ONG Mãos Amigas" dist="1.2 km" rating="4.9" />
        <InstitutionItem name="Instituto Amanhã" dist="3.5 km" rating="4.7" />

      </ScrollView>
    </View>
  );
}

/** * COMPONENTES DE INTERFACE (Reutilizáveis)
 * Criamos funções separadas para não repetir código e manter o arquivo limpo.
 */

// Item de Categoria (Cardzinho colorido com ícone)
const CategoryItem = ({ icon, label, color }: any) => (
  <TouchableOpacity style={[styles.catCard, { backgroundColor: color }]}>
    <MaterialCommunityIcons name={icon} size={28} color="#1A2D42" />
    <Text style={styles.catLabel}>{label}</Text>
  </TouchableOpacity>
);

// Card de Causa (Com imagem de fundo e título)
const CauseCard = ({ title, goal, img }: any) => (
  <View style={styles.causeCard}>
    <Image source={{ uri: img }} style={styles.causeImg} />
    <View style={styles.causeInfo}>
      <Text style={styles.causeTitle}>{title}</Text>
      <Text style={styles.causeGoal}>{goal}</Text>
    </View>
  </View>
);

// Item da Lista de Instituições (Com ícone de seta '>' no final)
const InstitutionItem = ({ name, dist, rating }: any) => (
  <TouchableOpacity style={styles.instCard}>
    <View style={styles.instIconPlaceholder} />
    <View style={{ flex: 1, marginLeft: 12 }}>
      <Text style={styles.instName}>{name}</Text>
      <Text style={styles.instSub}>{dist} • ⭐ {rating}</Text>
    </View>
    <Feather name="chevron-right" size={20} color="#CCC" />
  </TouchableOpacity>
);

/** * ESTILIZAÇÃO (CSS do React Native)
 */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F7F6" },
  header: { 
    flexDirection: 'row', // Alinha itens horizontalmente
    justifyContent: 'space-between', // Joga um para cada ponta
    alignItems: 'center', 
    paddingHorizontal: 25, 
    paddingTop: 60, 
    paddingBottom: 20, 
    backgroundColor: '#FFF' 
  },
  greeting: { fontSize: 22, fontWeight: 'bold', color: '#1A2D42' },
  subtitle: { fontSize: 14, color: '#7A8C99' },
  notificationBtn: { padding: 8, backgroundColor: '#F0F4F4', borderRadius: 10 },
  scrollContent: { padding: 25 },
  
  // Estilo do Card Verde de Impacto
  impactCard: { backgroundColor: '#6CBAA9', padding: 20, borderRadius: 20, marginBottom: 25 },
  impactTitle: { color: '#FFF', fontSize: 14, fontWeight: '600' },
  impactNumber: { color: '#FFF', fontSize: 28, fontWeight: 'bold', marginVertical: 8 },
  progressBar: { height: 8, backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 4 },
  progressFill: { height: 8, backgroundColor: '#FFF', borderRadius: 4 },
  
  // Títulos das seções
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#1A2D42', marginVertical: 15 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  seeAll: { color: '#6CBAA9', fontWeight: 'bold' },
  
  // Estilo dos Cards de Categoria
  categoriesScroll: { marginBottom: 10 },
  catCard: { width: 85, height: 90, borderRadius: 18, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  catLabel: { fontSize: 11, fontWeight: '700', marginTop: 5, color: '#1A2D42' },
  
  // Estilo dos Cards de Causas (com imagem)
  causeCard: { width: 200, backgroundColor: '#FFF', borderRadius: 15, marginRight: 15, overflow: 'hidden', elevation: 3 },
  causeImg: { width: '100%', height: 100 },
  causeInfo: { padding: 10 },
  causeTitle: { fontWeight: 'bold', color: '#1A2D42' },
  causeGoal: { fontSize: 12, color: '#6CBAA9', marginTop: 2 },
  
  // Estilo da Lista de Instituições
  instCard: { 
    backgroundColor: '#FFF', padding: 15, borderRadius: 15, 
    flexDirection: 'row', alignItems: 'center', marginBottom: 10 
  },
  instIconPlaceholder: { width: 45, height: 45, borderRadius: 10, backgroundColor: '#EEE' },
  instName: { fontWeight: 'bold', color: '#1A2D42' },
  instSub: { fontSize: 12, color: '#7A8C99' }
});