import React, {Component} from 'react'
import {View, Text, FlatList} from 'react-native'
import Http  from '../../libs/http'
class CoinDetailScreen extends Component {
    
    state = {
        coins :[]
    }
    componentDidMount = async () => {
        const res = await Http.instance.get('https://api.coinlore.net/api/tickers/')
        this.setState({
            coins: res.data
        })
    }
    render() {
        const { coins} = this.state
        return (
            <View>
                <FlatList
                    data={coins}
                    renderItem={({ item }) => <Text>{ item.name}</Text>}
                />
            </View>
        )
    }
}
export default CoinDetailScreen