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
          source={require('@/assets/images/gato.jpg')}
          style={styles.Cibele}
        />
      <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">CIBELE | 1 ANO</ThemedText>
        <ThemedText type="title"></ThemedText>
        
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">  GATO | FÊMEA | ADULTA | PORTE PEQUENO

</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">
          </ThemedText>{'Curitiba, Centro'}
        </ThemedText>
        
        
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="defaultSemiBold">10/05/2024</ThemedText>
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
        <ThemedText type="subtitle">HISTÓRIA DE CIBELE </ThemedText>
    
        <ThemedText>
          
          {`
Adote a Cibele e traga mais felicidade para a sua vida!
 `}
          
      </ThemedText>{'Sou a Cibele, tenho 1 ano! Estou sendo enviada para a adoção porque minha mãe vai se mudar e não tem como me levar, sou dócil, carinhosa, gosto de passear, e amo crianças. '}
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
  Cibele: {
    height: 200,
    width: 295,
    bottom: 10,
    left: 5,
    borderRadius: 15,
    shadowRadius: 34,
    shadowColor: "#ffffff"
  },
  
 
});
