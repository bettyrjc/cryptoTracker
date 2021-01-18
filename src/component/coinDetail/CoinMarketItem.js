import React from 'react'
import {
    View, 
    StyleSheet,
    Text,
} from 'react-native'
import Colors from '../../res/colors'

const CoinDetailScreen = ({item}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.priceText}>{item.price_usd}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderColor: Colors.zircon,
        padding: 16,
        margin: 8,
        alignItems: "center"
    },
    nameText: {
        color: "#FFF",
        fontWeight: "bold"
    },
    priceText: {
        color: '#fff'
    }
})

export default CoinDetailScreen