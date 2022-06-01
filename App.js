import React, { useState, useEffect }from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Pressable, FlatList} from 'react-native';
import api from './src/services/api';
import Filme from './src/Pages/Filme';

export default class App extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      filmes: []
    }
  }

  async componentDidMount(){
    const response = await api.get('r-api/?api=filmes')
    this.setState({
      filmes: response.data
    });
  }

  render(){
    return (
    <View style={styles.container}>
      <FlatList 
        data={this.state.filmes}
        keyExtractor={item => toString(item.id)}
        renderItem={({item})=> <Filme data={item}/>}
        />


       <Pressable style ={styles.botao}> 
          <Text style = {{color:'#fff'}}>isso e um texto</Text>
       </Pressable>
      <StatusBar style="auto" />
    </View>
    );
  }
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
