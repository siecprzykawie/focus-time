import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View } from 'react-native';

import { colors } from './src/utils/colors';

import HomeScreen from './src/views/HomeScreen/HomeScreen';

const App = () => (
  <>
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <HomeScreen />
      </View>
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: colors.primaryBackground,
  },
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default App;
