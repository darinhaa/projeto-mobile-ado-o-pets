import { ThemedText } from '@/components/themed-text';
import { Image } from 'expo-image';
import { Linking, ScrollView, StyleSheet, View } from 'react-native';
export default function HomeScreen() {
    const handleAgendarVisita = () => {
      Linking.openURL("https://calendly.com/seu-usuario/visita-pip"); 
      // substituir pela minha api q vou criar
    };
  
  return (


    <ScrollView style={estilos.view}>
      <View style={estilos.logo}>
        <Image
          source={require('@/assets/images/aumigo.png')}
          style={estilos.superior}
        />

        
      <ThemedText style={estilos.tituloHistoria}>AUMIGOS PARA ADOÇÃO:</ThemedText>

      </View>
      <View style={estilos.imagem}>
        <Image
          source={require('@/assets/images/gato.jpg')}
          style={estilos.imagemPet}
        />
      </View>
      <View style={estilos.imagem}>
        <Image
          source={require('@/assets/images/ze pug.jpg')}
          style={estilos.imagemPet}
        />
      </View>
      <View style={estilos.imagem}>
        <Image
          source={require('@/assets/images/pip.png')}
          style={estilos.imagemPet}
        />
      </View>
      <View style={estilos.imagem}>
        <Image
          source={require('@/assets/images/vira_lata_zoe.webp')}
          style={estilos.imagemPet}
        />
      </View>
      
    </ScrollView>
  );
}


const estilos = StyleSheet.create({
  view: {
    height: '100%',
    width: '100%'
  },
  imagem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 115,
    paddingBottom: 20
  },
  imagemPet: {
    height: 300,
    width: 250,
    borderRadius: 15,
    shadowRadius: 24,
  },
logo: {
  height: 10,
  width: 380,
  shadowRadius: 20,
  

},
superior: {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  paddingTop: 20,
  paddingBottom: 60,
  shadowRadius: 10

},
tituloHistoria: {
  fontSize: 22,
  fontWeight: '700',
  color: '#EECA06',
  marginLeft:50,
  height: 11
},

});