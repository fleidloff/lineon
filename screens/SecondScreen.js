import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

const SecondScreen = ({ navigation, route }) => (
  <View style={styles.container}>
    <Text>second screen</Text>
    <Button
      title="Go to Home"
      onPress={() => {
        navigation.navigate('Home')
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

export default SecondScreen
