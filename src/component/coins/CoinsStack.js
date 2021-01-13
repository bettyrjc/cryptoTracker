import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CoinScreen  from './CoinsScreen'
const Stack = createStackNavigator();

const CoinsStack = () => {
    return (
        <div>
            <Stack.Navigator>
                <Stack.Screen
                    name='Coins'
                    component={CoinScreen}
                />
            </Stack.Navigator>
        </div>
    )
}

export default CoinsStack
