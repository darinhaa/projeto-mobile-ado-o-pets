import { ThemedText } from '@/components/themed-text';
import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
export default function HomeScreen() {
return (


<View>

<Image
source={require('@/assets/images/pip.png')}
style={estilos.imagemPet}
/>




<br /><ThemedText style={estilos.nomePet}>PIP | 3 MESES</ThemedText>






<ThemedText style={estilos.local}>Curitiba, Batel</ThemedText>
<ThemedText style={estilos.data}>28/07/2025</ThemedText>



<ThemedText style={estilos.tituloHistoria}>HISTÓRIA DE PIP</ThemedText>
<ThemedText style={estilos.textoHistoria}>
Pip é um hamster sírio de 3 meses, um pequeno sonhador de personalidade
tranquila e curiosa. Seu maior desejo é uma família paciente que entenda
sua natureza gentil, oferecendo um ambiente calmo onde possa se sentir
seguro para ser ele mesmo.
</ThemedText>
<ThemedText style={estilos.destaque}>
Adote o Pip e traga mais felicidade para a sua vida!
</ThemedText>
<TouchableOpacity style={estilos.button} onPress={() => alert('Quero Adotar!')}>
        <ThemedText style={estilos.buttonText}>QUERO ADOTAR!</ThemedText>
      </TouchableOpacity>

</View>
);
}

const estilos = StyleSheet.create({

  button: {
    backgroundColor: '#ff4081', 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25, 
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20, 
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

imagemPet: {
height: 200,
width: 250,
bottom: 10,
left: 77,
borderRadius: 15,
shadowRadius: 34,
shadowColor: 'black',
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

destaque: {
fontSize: 15,
color: '#fff',
backgroundColor: '#ff4081',
textAlign: 'center',
paddingVertical: 3,
borderRadius: 100,
fontWeight: '600',
},
});
