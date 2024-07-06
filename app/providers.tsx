import { config } from "@/tamagui.config";
import type { ReactNode } from "react";
import { TamaguiProvider } from "tamagui";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useColorScheme } from 'react-native'


export default function Providers({ children }: { children: ReactNode }) {
  const colorScheme = useColorScheme()

  return (
    <TamaguiProvider
      config={config}
      defaultTheme={colorScheme === 'dark' ? 'dark' : 'light'}
    >
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        {children}
      </ThemeProvider>
    </TamaguiProvider>
  )
}