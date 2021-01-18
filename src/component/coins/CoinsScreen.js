import React, {Component} from 'react'
import {
    View, 
    StyleSheet,
    ActivityIndicator,
    FlatList,
} from 'react-native'

import Http from '../../libs/http'
import CoinItem from './CoinsItem'
import CoinSearch from './CoinSearch'


class CoinDetailScreen extends Component {
    
    state = {
        coins: [],
        allCoins: [],
        loading: false
    }
    componentDidMount = async () => {
        this.getCoins()
      
    }

    getCoins = async () => {
        this.setState({loading:true})
        const res = await Http.instance.get('https://api.coinlore.net/api/tickers/')
        this.setState({
            coins: res.data,
            allCoins:res.data,
            loading: false
        })
    }

     handlePress = (coin) => {
        this.props.navigation.navigate('CoinDetail', { coin });
     }
    
    handleSearch = (query) => {
        const { allCoins } = this.state
        const coinsFiltered = allCoins.filter((coin) => {
            return coin.name.toLowerCase().includes(query.toLowerCase()) ||  coin.symbol.toLowerCase().includes(query.toLowerCase())
        })
        this.setState({coins: coinsFiltered})
    }

    render() {
        const { coins, loading } = this.state
        return (
            <View>
                <CoinSearch
                    onChange={this.handleSearch}
                />
                {
                    loading ?
                        <ActivityIndicator
                            color='#fff'
                            size='large'
                        /> : null
                }
                <FlatList
                    data={coins}
                    renderItem={({ item }) => <CoinItem item={item} onPress={() => this.handlePress(item)}/> }
                />
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
export default CoinDetailScreen