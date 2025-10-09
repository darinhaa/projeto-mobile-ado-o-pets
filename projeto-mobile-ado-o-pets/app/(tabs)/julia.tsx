





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
          source={require('@/assets/images/ze pug.jpg')}
          style={styles.ZePug}
        />
      <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">ZÉ PUG | 2 ANOS</ThemedText>
        <ThemedText type="title"></ThemedText>
        
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">  CACHORRO | MACHO | FILHOTE | PORTE PEQUENO

</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">
          </ThemedText>{'Curitiba, Capão Raso'}
        </ThemedText>
        
        
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="defaultSemiBold">09/07/2025</ThemedText>
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
        <ThemedText type="subtitle">HISTÓRIA DE ZOE </ThemedText>
    
        <ThemedText>
          
          {`
Adote o Zé e traga mais felicidade para a sua vida!
 `}
          
      </ThemedText>{'Zé é um pug de 2 anos, cheio de energia e amor para dar. Ele adora explorar o mundo, correr atrás de sua bolinha e aproveitar cada momento de diversão. Mas no final do dia, o que ele mais quer é estar ao lado de quem ama, recebendo carinho e espalhando alegria. '}
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
