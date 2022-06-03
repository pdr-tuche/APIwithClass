import React, { useState, useEffect }from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Pressable, FlatList, Image} from 'react-native';
import api from './src/services/api';

export default function App (){

  const [filmes,setFilmes] = useState([])


  const getFilme = async () => {
    const {data} = await api.get('r-api/?api=filmes')
    setFilmes(data)
  } 
  const renderItem = ({ item }) => (
    <View>
      {/* <Image source = {require(item.foto)}/>  TENHO DIFICULDADES EM PUXAR IMAGEM*/}
      <Text> Filme: {item.nome} </Text>
      <Text style = {{marginBottom:20}}>Sinopse: {item.sinopse}</Text>
    </View>
  );
  
    return (
    <View style={styles.container}>
       <Pressable style ={styles.botao} onPress={getFilme}> 
          <Text style = {{color:'#fff'}}>isso e um texto</Text>
       </Pressable>

       <FlatList
        data={filmes}
        renderItem={renderItem}
        keyExtractor={filmes.id}
      />
      <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    backgroundColor:'#000',
    height:100,
    width:100,
    justifyContent:'center',
    borderRadius:25,
    marginTop:20,
  },
});
