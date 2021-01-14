import React, { Component } from 'react'
import {View, Text, Pressable, StyleSheet} from 'react-native'

//pressable es un hiperlink
class CoinScreen extends Component {
    handlePress = () => {
        this.props.navigation.navigate('CoinsDetails')
    }
    render() {
        return (
            <View style={styles.cotainer}>
                <Text style={styles.title}>Component Screen</Text>
                <Pressable style={styles.btn} onPress={this.handlePress}>
                    <Text style={styles.btnText}>Ir a detalles</Text>
                </Pressable>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    cotainer: {
        flex: 1,
        backgroundColor: 'red',
        alignItems:'center'
    },
    title: {
        color: '#fff',
        textAlign:'center'
    },
    btn: {
        padding: 8,
        backgroundColor: 'blue',
        borderRadius: 8,
    },
    btnText:{
        color: '#FFF',
        textAlign: 'center'
    }
})
export default CoinScreen