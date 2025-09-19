import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { HeaderBackground } from '@react-navigation/elements';

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
        <ThemedText type="title"></ThemedText>
        
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"> </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">
          </ThemedText>{' '}
         
        </ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle"></ThemedText>
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
        <ThemedText type="subtitle"></ThemedText>
        <ThemedText>
          
          {`
 `}

      
          
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
 







