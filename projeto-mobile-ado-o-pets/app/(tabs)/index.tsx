import { ThemedText } from '@/components/themed-text';
import { Image } from 'expo-image';
import { Linking, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
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
      </View>


      <View style={estilos.imagem}>
        <Image
          source={require('@/assets/images/caes.jpg')}
          style={estilos.imagemPets}
        />
      </View>
    

      <TouchableOpacity style={estilos.button} onPress={() => alert('Quero Adotar!')}>
        <ThemedText style={estilos.buttonText}>QUERO ADOTAR!</ThemedText>
      </TouchableOpacity>

      <ThemedText style={estilos.Novoanimal}>Encontre seu mais novo animal aqui!
      </ThemedText>

      <ThemedText style={estilos.textoHistoria}>

        Nosso site está cheio de animais esperando por uma família
Vem dar uma olhada!.
      </ThemedText>
      
      <ThemedText style={estilos.pqadotar}>Por que adotar?</ThemedText>

      <ThemedText style={estilos.nesse}>

      Nesse exato momento, existem muitos animais esperando um humano para chamar de seu e um lar onde serão amados e cuidados.
</ThemedText>


  


    


    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  view: {
    height: '100%',
    width: '100%'
  },
  button: {
    backgroundColor: '#ff4081',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    shadowColor: '#B82B6F',
    shadowRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },


  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
  },

  
  containerTitulo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
  },


  Novoanimal: {
    fontSize: 20,
    fontWeight: '700',
    color: '#D4B200',
    textTransform: 'uppercase',
    marginLeft: 20
  },

  idade: {
    fontSize: 18,
    fontWeight: '600',
    color: '#D4B200',
    marginLeft: 6,
  },

  logo: {
    height: 0,
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

  imagem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 105,
    paddingBottom: 20
  },

  imagemPets: {
    height: 190,
    width: 350,
    borderRadius: 15,
    shadowRadius: 24,
  },



  pqadotar: {
    fontSize: 16,
    fontWeight: '700',
    color: '#E91E63',
    marginBottom: 8,
    marginLeft: 20
  },

  textoHistoria: {
    fontSize: 13,
    lineHeight: 23,
    color: 'black',
    marginBottom: 12,
    marginLeft: 20
  },

  nesse: {
    fontSize: 13,
    lineHeight: 23,
    color: 'black',
    marginBottom: 12,
    marginLeft: 20
  },


  
});