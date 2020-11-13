import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

const HomeScreen = ({ navigation, route }) => (
  <View style={styles.container}>
    <Text>Hello, World!</Text>
    <Button
      title="Go to Screen 2"
      onPress={() => {
        navigation.navigate('Screen2')
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen
