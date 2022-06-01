import React from 'react'
import {View, Text, Image} from 'react-native'

export default class Filme extends React.Component{
    render(){
        return(
            <View>
                <Text> {this.props.data.nome}</Text>
            </View>
        )
    }
}