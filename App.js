/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import CoinStack from 'cryptoTracker/src/components/coins/CoinsStack'

i
import {NavigationContainer} from '@react-navigation/native'
const App = ()  => {
  return (
    <>
    {/* tiene todo el estado de la navegacion en general */}
      <NavigationContainer>
        <CoinStack/>
      </NavigationContainer>
   </>
  );
};


export default App;
