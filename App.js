import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import CoinStack from './src/component/coins/CoinsStack'

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
