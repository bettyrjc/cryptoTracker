import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CoinScreen  from './CoinsScreen'
import CoinDetailScreen  from './CoinDetailScreen'
const Stack = createStackNavigator();

const CoinsStack = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen
                    name='Coins'
                    component={CoinScreen}
            />
                <Stack.Screen
                    name='CoinsDetails'
                    component={CoinDetailScreen}
                />
            </Stack.Navigator>
    )
}

export default CoinsStack
