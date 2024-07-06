import { Text, View } from 'tamagui';
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useAnonSignIn } from '@/src/hooks/auth';

SplashScreen.preventAutoHideAsync();

export default function Index() {

  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  const userCredential = useAnonSignIn();

  return (
    <View style={{
      flex: 1,
    }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}