import React, {useEffect} from 'react';

import {SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';
import messaging from '@react-native-firebase/messaging';

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  if (enabled) {
    // console.log('FCM Authorization status:', authStatus);
  }
}
const App = () => {
  useEffect(() => {
    const getToken = async () => {
      await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();
      console.log(token);
    };
    getToken();
  }, []);

  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('A new FCM message ddddddd!', JSON.stringify(remoteMessage));
  });
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    requestUserPermission();

    return unsubscribe;
  }, []);

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
