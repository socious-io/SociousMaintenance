/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {cloneElement} from 'react';
import type {Node} from 'react';

import {
  StyleSheet,
  Text,
  Linking,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const onLinkPress = () => {
    Linking.openURL('https://socious.io/app');
  };

  return (
    // eslint-disable-next-line react-native/no-inline-styles

    <View style={styles.container}>
      <Image
        style={{position: 'absolute'}}
        source={require('./assets/image/source/projects-header.png')}
      />
      <View style={styles.gradient} />
      <View style={styles.constent}>
        <Image
          source={require('./assets/image/drawable/tool_bar_soscious.png')}
        />
        <Text style={styles.sectionTitle}>
          The Socious mobile app is currently under maintenance. In the
          meantime, please use the browser version of the app
          <Text onPress={onLinkPress} style={styles.link}>
            {' '}
            https://socious.io/app
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#111',
  },
  gradient: {
    position: 'absolute',
    backgroundColor: 'rgba(31,47,89,0.2)',
    width: '100%',
    height: '100%',
  },
  constent: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    padding: 16,
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center',
    fontFamily: 'WorkSans-SemiBold',
    color: '#fff',
  },
  link: {
    color: '#C8E5FF',
  },
});

export default App;
