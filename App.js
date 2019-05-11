import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import Navigator from './src/Navigator';
import store from './src/store';
import { baseStyles } from './src/variables';

const App = () => (
  <Provider store={store}>
    <SafeAreaView style={baseStyles.flex}>
      <Navigator />
    </SafeAreaView>
  </Provider>
);

export default App;
