import { ThemedText } from '@/components/themed-text';
import { Image } from 'expo-image';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
export default function HomeScreen() {
  return (


    <ScrollView style={estilos.view}>
      <View style={estilos.imagem}>
        <Image
          source={require('@/assets/images/animais.jpg')}
          style={estilos.imagemPet}
        />
      </View>

      <TouchableOpacity style={estilos.button} onPress={() => alert('Quero Adotar!')}>
        <ThemedText style={estilos.buttonText}>QUERO ADOTAR!</ThemedText>
      </TouchableOpacity>

      <ThemedText style={estilos.nomePet}>Encontre seu mais novo animal aqui!
        
      
    
      </ThemedText>



      
  
      <ThemedText style={estilos.textoHistoria}>
      Nosso site está cheio de animais esperando por uma família
      Vem dar uma olhada!      </ThemedText>

      <ThemedText style={estilos.tituloHistoria}>Por que adotar?</ThemedText>


      <ThemedText style={estilos.Historia}>
      Nesse exato momento, existem muitos animais esperando um humano para chamar de seu e um lar onde serão amados e cuidados.     </ThemedText>

     
      
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
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
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


  nomePet: {
    fontSize: 20,
    fontWeight: '500',
    color: '#D4B200',
    textTransform: 'uppercase',
    marginLeft: 10
  },

  idade: {
    fontSize: 18,
    fontWeight: '600',
    color: '#D4B200',
    marginLeft: 6,
  },
  imagem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20
  },
  imagemPet: {
    height: 190,
    width: 250,
    borderRadius: 15,
    shadowRadius: 34,
  },

  containerInfo: {
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,

  },

  local: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginLeft: 20
  },

  data: {
    fontSize: 14,
    color: '#333',
    marginTop: 2,
    marginLeft: 20
  },

  containerHistoria: {
    paddingHorizontal: 20,
    marginTop: 10,

  },

  tituloHistoria: {
    fontSize: 20,
    fontWeight: '700',
    color: '#E91E63',
    marginBottom: 8,
    marginLeft: 20
  },

  textoHistoria: {
    fontSize: 16,
    lineHeight: 29,
    color: 'black',
    marginBottom: 16,
    marginLeft: 20
  },

  Historia: {
    fontSize: 17,
    lineHeight: 29,
    color: 'black',
    marginBottom: 16,
    marginLeft: 20
  },


 
  
});
