import React from 'react';

import {SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        originWhitelist={['*']}
        source={{uri: 'https://socious.io/app'}}
      />
    </SafeAreaView>
  );
};

export default App;
