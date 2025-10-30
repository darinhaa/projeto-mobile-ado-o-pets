import { ThemedText } from '@/components/themed-text';
import { Image } from 'expo-image';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
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
          source={require('@/assets/images/vira_lata_zoe.webp')}
          style={estilos.imagemPet}
        />
      </View>
<br /><ThemedText style={estilos.nomePet}>ZOE | 5 ANOS
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" fill="black" className="16" viewBox="0 0 20 16">
  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" fill="black" className="16" viewBox="0 0 20 16">
  <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" fill="black" className="16" viewBox="0 0 20 16">
  <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
</svg>
</ThemedText>
      
<ThemedText style={estilos.local}> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 -40 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg> 
 <ThemedText>Curitiba, Capão Raso</ThemedText>
        </ThemedText>
      <ThemedText style={estilos.data}> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" className="bi bi-calendar-event-fill" viewBox="0 0 -40 16">
  <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5"/>
</svg>
<ThemedText>  09/07/2025</ThemedText>
     </ThemedText>
<ThemedText style={estilos.tituloHistoria}>HISTÓRIA DE ZOE</ThemedText>
<ThemedText style={estilos.textoHistoria}>
Zoe, uma vira-lata de 5 anos,é sábia, tranquila e cheia de amor para dar.
Sobrevivente das ruas, mas sem rancor no coração,
seu maior sonho é um lar tranquilo para chamar de seu. 
É castrada, vacinada e educada, 
e esta pronta para ser sua companheira leal e grata.
</ThemedText>
<ThemedText style={estilos.destaque}>
Adote a Zoe e traga mais felicidade para a sua vida!
</ThemedText>

<TouchableOpacity style={estilos.button} onPress={() => alert('Quero Adotar!')}>
        <ThemedText style={estilos.buttonText}>QUERO ADOTAR!</ThemedText>
      </TouchableOpacity>


</ScrollView>
);
}


const estilos = StyleSheet.create({

  view: {

    height: '100%',
    width: '100%'
    
  },

  button: {
    backgroundColor: '#EECA06',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 25, 
    alignItems: 'center',
    marginTop: 20, 
    marginLeft: 30,
    marginRight: 30, 
    shadowRadius: 10, 
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

fundo: {



},

nomePet: {
fontSize: 20,
fontWeight: '700',
color: '#EECA06',
textTransform: 'uppercase',
marginLeft: 20
},

idade: {
fontSize: 18,
fontWeight: '600',
color: '#EECA06',
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
  paddingTop: 115,
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
color: '#EECA06',
marginLeft: 15,
},

data: {
fontSize: 14,
color: '#EECA06',
marginTop: 2,
marginLeft: 20,
fontWeight: 'bold'
},

containerHistoria: {
paddingHorizontal: 20,
marginTop: 10,

},

tituloHistoria: {
fontSize: 16,
fontWeight: '700',
color: '#FF71B5',
marginBottom: 8,
marginLeft: 20, 
},

textoHistoria: {
fontSize: 16,
lineHeight: 23,
color: '#black',
marginBottom: 15,
marginLeft: 12,
fontWeight: 600
},


destaque: {
  fontSize: 15,
  color: '#000000',
  backgroundColor: '#FF71B5',
  textAlign: 'center',
  paddingVertical: 2,
  borderRadius: 15,
  fontWeight: '600',
  marginLeft: 4,
  marginRight:4,
  shadowRadius: 5,
}, 
});
