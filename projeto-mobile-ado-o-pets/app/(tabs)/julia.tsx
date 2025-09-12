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
      headerBackgroundColor={{ light: '#ffffff', dark: '#ffffff' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
         
          
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">ZÉ PUG | 2 ANOS</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">cachorro | macho | filhote | porte pequeno </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">
          </ThemedText>{' '}
          Capão raso, Curitiba
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">A HISTÓRIA DE ZÉ</ThemedText>
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
          {`Zé é um pug de 2 anos, cheio de energia e amor para dar. Ele adora explorar o mundo, correr atrás de sua bolinha e aproveitar cada momento de diversão. Mas no final do dia, o que ele mais quer é estar ao lado de quem ama, recebendo carinho e espalhando alegria.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <ThemedText>
          {`
Adote o Zé e traga mais felicidade para a sua vida! `}
          
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
    
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  stepContainer: {
    gap: 1,
    marginBottom: 4,
  },
  reactLogo: {
    height: 17,
    width: 90,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});





