import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import Bubble from '../components/Bubble';

const renderBubbles = (amount) => (
  <View style={styles.bubbles}>
    {Array.from({length: amount}, (_, index) =>
      <Bubble key={index} />
    )}
  </View>
);
const SecondScreen = ({ navigation, route }) => (
  <View style={styles.container}>
    {renderBubbles(1)}
    {renderBubbles(2)}
    {renderBubbles(3)}
    {renderBubbles(4)}
    {renderBubbles(3)}
    {renderBubbles(4)}
    {renderBubbles(3)}
    {renderBubbles(2)}
    {renderBubbles(1)}

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
  bubbles: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 100,
    width: "100%",
  }
});

export default SecondScreen
