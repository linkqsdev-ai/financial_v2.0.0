import "./global.css";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { AppNavigator } from './src/navigation/AppNavigator';
import { useFonts } from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Platform, StyleSheet } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    ...MaterialIcons.font,
    ...MaterialCommunityIcons.font,
  });

  if (!fontsLoaded) {
    return <View style={styles.loadingContainer} />;
  }

  return (
    <View style={styles.outerContainer}>
      <View style={styles.mobileFrame}>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1, backgroundColor: '#F2F2F7' }} edges={['top']}>
            <AppNavigator />
          </SafeAreaView>
          <StatusBar style="auto" />
        </SafeAreaProvider>
      </View>
    </View>
  );
}

const isWeb = Platform.OS === 'web';

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: '#0A0E1B',
  },
  outerContainer: {
    flex: 1,
    height: (isWeb ? '100vh' : 'auto') as any,
    maxHeight: (isWeb ? '100vh' : undefined) as any,
    backgroundColor: isWeb ? '#0d0d14' : 'transparent',
    alignItems: isWeb ? 'center' : 'stretch',
    justifyContent: isWeb ? 'center' : 'flex-start',
    overflow: 'hidden',
  },
  mobileFrame: {
    flex: 1,
    width: '100%',
    maxWidth: isWeb ? 430 : undefined,
    height: isWeb ? '100%' : 'auto',
    maxHeight: isWeb ? '100%' : undefined,
    overflow: 'hidden',
    // Subtle shadow on web to give a phone-frame feel
    ...(isWeb ? {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 40,
    } : {}),
  },
});

