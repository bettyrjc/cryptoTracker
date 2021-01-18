import React, {Component} from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import colors from '../../res/colors'
import FavoritesEmptyState from './FavoriteEmptyState'
import Storage from '../../libs/storage'
import CoinsItem from '../../component/coins/CoinsItem'

class FavoritesScreen extends Component {
    state = {
        favorites:[]
    }
    getFavorites = async() => {
        try {
            const allKeys = await Storage.instance.getAllKeys()
            const keys = allKeys.filter((key) => key.includes("favorite-"))
            const favs = await Storage.instance.multiGet(keys)
            const favorites = favs.map((fav) => JSON.parse(fav[1]))
            this.setState({favorites})
        } catch (err) {
            console.log('get favorites error', err);
        }
    }
    handlePress(coin) {
        this.props.navigation.navigate("CoinDetail", {coin})
    }

    componentDidMount() {
        this.props.navigation.addListener("focus", this.getFavorites)
    }
    componentWillUnmount() {
        this.props.navigation.addListener("focus", this.getFavorites)
    }
    
    render() {
        const {favorites} =  this.state
        return (
            <View style={styles.container}>
                {
                    favorites.length === 0 ? 
                    <FavoritesEmptyState/> : null
                }
                {
                    favorites.length > 0 ?
                        <FlatList
                            data={favorites}
                            renderItem={({ item }) => <CoinsItem
                                item={item}
                                onPress={() => this.handlePress(item)} />}
                        /> :  null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.charade,
        
    },

})

export default FavoritesScreen