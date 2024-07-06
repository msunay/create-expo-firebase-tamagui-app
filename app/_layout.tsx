import { Stack } from "expo-router";
import Providers from "./providers";

export default function RootLayout() {
  
  return (
    <Providers>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </Providers>
  );
}
