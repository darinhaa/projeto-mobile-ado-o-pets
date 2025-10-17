





import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';



import { ThemedText } from '@/components/themed-text';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    
<View           style={styles.banana}
>
         <Image
          source={require('@/assets/images/ze pug.jpg')}
          style={styles.ZePug}
        />
      <ThemedText type="title" style={styles.titulo}>ZÉ PUG | 2 ANOS</ThemedText>
        <ThemedText type="title"></ThemedText>
        <ThemedText type="subtitle" style={styles.textos}>  CACHORRO | MACHO | FILHOTE | PORTE PEQUENO
          
</ThemedText > 

        <ThemedText >
          <ThemedText type="defaultSemiBold"style={styles.textos}> Curitiba, Capão Raso
          </ThemedText >
        </ThemedText >
         <ThemedText type="defaultSemiBold"style={styles.textos}>09/07/2025</ThemedText >
        <ThemedText type="subtitle"  style={styles.historia}>HISTÓRIA DE ZE PUG </ThemedText>
        <ThemedText type='defaultSemiBold' style={styles.textos}> Zé é um pug de 2 anos, cheio de energia e amor para dar. Ele adora explorar o mundo, correr atrás de sua bolinha e aproveitar cada momento de diversão. Mas no final do dia, o que ele mais quer é estar ao lado de quem ama, recebendo carinho e espalhando alegria.
        </ThemedText>
        
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
        <ThemedText style={styles.textos}>Adote o Zé e traga mais felicidade para a sua vida!</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      

       
     
     
    </View>
    
  );
  
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    
  },
  stepContainer: {
    gap: 25,
    marginBottom: 4,
  },
   ZePug: {
    height: 250,
    width: 250,
    bottom: 10,
    left: 15,
    borderRadius: 15,
    shadowRadius: 34,
    shadowColor: "#000000",
    
  },
 

  banana: {
    backgroundColor: 'white',
    padding:25,


  },
  historia: {
    color: '#FF71B5',
  },
  textos: {
    color: 'black',
  },
  titulo: {
    color: '#C6A703'
  }
  
  
  
  
 
});

  