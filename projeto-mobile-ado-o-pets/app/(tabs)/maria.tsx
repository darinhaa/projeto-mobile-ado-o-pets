import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
<<<<<<< HEAD
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
=======
        <ThemedText type="title">ZOE |5 ANOS </ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Curitiba, Tatuquara</ThemedText>
        <ThemedText>
           <ThemedText type="defaultSemiBold">29/08/2025</ThemedText>
          {' '}
>>>>>>> 731f01ca3d833541b6415438d53d04a2ffee14ea
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
<<<<<<< HEAD
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
=======
              web: '',
            })}
          </ThemedText>{' '}
          
>>>>>>> 731f01ca3d833541b6415438d53d04a2ffee14ea
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
<<<<<<< HEAD
            <ThemedText type="subtitle">Step 2: Explore</ThemedText>
=======
            <ThemedText type="subtitle">HISTÓRIA DE ZOE </ThemedText>
>>>>>>> 731f01ca3d833541b6415438d53d04a2ffee14ea
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        <ThemedText>
<<<<<<< HEAD
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
=======
          {`Zoe, uma vira-lata de 5 anos, é sábia, tranquila e cheia de amor para dar. Sobrevivente das ruas, mas sem rancor no coração, seu maior sonho é um lar tranquilo para chamar de seu. É castrada, vacinada e educada, e esta pronta para ser sua companheira leal e grata.
`}
>>>>>>> 731f01ca3d833541b6415438d53d04a2ffee14ea
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
<<<<<<< HEAD
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
=======
          <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
>>>>>>> 731f01ca3d833541b6415438d53d04a2ffee14ea
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}
<<<<<<< HEAD

=======
>>>>>>> 731f01ca3d833541b6415438d53d04a2ffee14ea
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
