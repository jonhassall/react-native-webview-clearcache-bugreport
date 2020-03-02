import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { WebView } from 'react-native-webview';

export default class ClearCache extends React.Component {
  webview = null;
  sourceURL = null;

  goToUrl(newURL) {
    const redirectTo = 'window.location = "' + newURL + '"';
    this.webview.injectJavaScript(redirectTo);
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 50 }}>
        <Text>Webview Cache Bug Report</Text>
        <Button
          title="Load"
          onPress={() => {
            Alert.alert('Loading webview');
            this.goToUrl('https://www.jonhassall.com/date.php');
          }}
        />
        <Button
          title="Clear Cache"
          onPress={() => {
            Alert.alert('Clearing cache');
            this.webview.clearCache(true);
          }}
        />
        <WebView
          ref={ref => (this.webview = ref)}
          originWhitelist={['*']}
          style={{ height: '100%', backgroundColor: 'lightgrey' }}
          textZoom={150}
          onError={syntheticEvent => {
            const { nativeEvent } = syntheticEvent;
            console.warn('WebView error: ', nativeEvent);
          }}
          onHttpError={syntheticEvent => {
            const { nativeEvent } = syntheticEvent;
            console.warn(
              'WebView received error status code: ',
              nativeEvent.statusCode,
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: 40
  },
});
