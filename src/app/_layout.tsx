import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Tela de Login/Entrada (index.tsx) */}
      <Stack.Screen name="index" /> 
      
      {/* O grupo de abas (Tabs) */}
      <Stack.Screen name="(tabs)" /> 
      
      {/* Telas de categorias (se existirem na raiz da pasta app) */}
      <Stack.Screen name="categoria/alimentos" options={{ headerShown: true, title: "Alimentos" }} />
    </Stack>
  );
}