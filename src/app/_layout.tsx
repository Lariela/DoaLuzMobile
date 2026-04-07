import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Tela de Login/Entrada */}
      <Stack.Screen name="index" /> 
      
      {/* O grupo de abas (Tabs) - Adicione esta linha */}
      <Stack.Screen name="(tabs)" /> 
    </Stack>
  );
}