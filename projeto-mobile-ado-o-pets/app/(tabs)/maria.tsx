import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

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
          source={require('@/assets/images/petlogo.png')}
          style={styles.reactLogo}
        />
      }>
         <Image
          source={require('@/assets/images/vira_lata_zoe.webp')}
          style={styles.ZePug}
        />
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">ZOE | 5 ANOS </ThemedText>
       
       
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">CACHORRO | FÊMEA | FILHOTE | PORTE MÉDIO</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">
          </ThemedText>{' Curitiba,Tatuquara'}
         
        </ThemedText>
      </ThemedView>
     
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">29/08/2025</ThemedText>
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

       
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">HISTÓRIA DE ZOE</ThemedText>
        <ThemedText>
         
          {`
 Adote a Zoe e traga mais felicidade para a sua vida!
 `}

  
         
        </ThemedText>Zoe, uma vira-lata de 5 anos,é sábia, tranquila e cheia de amor para dar.
        Sobrevivente das ruas,
         mas sem rancor no coração,
        seu maior sonho é um lar tranquilo para chamar de seu. É castrada, vacinada e educada,
         e esta pronta para ser sua companheira leal e grata.
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
    height: 178,
    width: 290,
    bottom: 40,
    left: 40,
    position:'absolute'
   
  },
  ZePug: {
    height: 200,
    width: 295,
    bottom: 10,
    left: 5,
    borderRadius: 15,
    shadowRadius: 34,
    shadowColor: "#ffffff"
  },
 
 
});
