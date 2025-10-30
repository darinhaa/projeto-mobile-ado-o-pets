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

      <ThemedText style={estilos.Novoanimal}> Encontre seu mais novo animal aqui! <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-hearts" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.931.481c1.627-1.671 5.692 1.254 0 5.015-5.692-3.76-1.626-6.686 0-5.015m6.84 1.794c1.084-1.114 3.795.836 0 3.343-3.795-2.507-1.084-4.457 0-3.343M7.84 7.642c2.71-2.786 9.486 2.09 0 8.358-9.487-6.268-2.71-11.144 0-8.358"/>
</svg>
      </ThemedText>

      <ThemedText style={estilos.textoHistoria}>

        Nosso site está cheio de animais esperando por uma família
Vem dar uma olhada!. 

      </ThemedText>
      
      <ThemedText style={estilos.pqadotar}>Por que adotar? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-heart-fill" viewBox="0 0 16 16">
  <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707z"/>
  <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018"/>
</svg>
</ThemedText>

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
    fontSize: 18,
    fontWeight: '500',
    color: '#D4B200',
    textTransform: 'uppercase',
    marginLeft: 20,
    width: 1000,
    height: 10
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
    fontSize: 18,
    fontWeight: '700',
    color: '#E91E63',
    marginBottom: 8,
    marginLeft: 20
  },

  textoHistoria: {
    fontSize: 18,
    lineHeight: 23,
    color: 'black',
    marginBottom: 12,
    marginLeft: 20
  },

  nesse: {
    fontSize: 18,
    lineHeight: 23,
    color: 'black',
    marginBottom: 12,
    marginLeft: 20
  },


  
});