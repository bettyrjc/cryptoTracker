import React from 'react'
import {
    View, 
    StyleSheet,
    Text
} from 'react-native'

const FavoritesEmptyState = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>You don't have any favorites yet</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    },
    text: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 18,
        alignSelf: "center"
    }
})
export default FavoritesEmptyState