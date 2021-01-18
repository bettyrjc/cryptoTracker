import React from 'react';
import {Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import CoinStack from './src/component/coins/CoinsStack'
import FavoritesStack from './src/component/favorites/FavoritesStack'

import Colors from './src/res/colors';

const Tabs = createBottomTabNavigator();

const App = ()  => {
  return (
    <>
    {/* tiene todo el estado de la navegacion en general */}
      <NavigationContainer>
        <Tabs.Navigator
          tabBarOptions={{
            tintColor: '#fefefe',
            style: {
              backgroundColor: Colors.blackPearl
            }
          }}
        >
          <Tabs.Screen
            name='Coins'
            component={CoinStack}
            options={{
              tabBarIcon: ({size, color}) => (
                <Image
                  style={{tintColor: color, width: size, height:size }}
                  source={require('cryptoTracker/src/assets/bank.png')}
                />
              )
            }}
          /> 
           <Tabs.Screen
            name='Favorites'
            component={FavoritesStack}
            options={{
              tabBarIcon: ({size, color}) => (
                <Image
                  style={{tintColor: color, width: size, height:size }}
                  source={require('cryptoTracker/src/assets/star.png')}
                />
              )
            }}
          /> 
        </Tabs.Navigator>
        
      </NavigationContainer>
   </>
  );
};


export default App;
