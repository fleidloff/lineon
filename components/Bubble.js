import React, {useState} from "react";
import {Text, View, StyleSheet, Animated, TouchableWithoutFeedback} from 'react-native';
import useAnimation from '../hooks/useAnimation';

const animationConfig = (value) => ({
  initialValue: value,
  toValue: value,
  duration: 100,
  useNativeDriver: true,
});

const Bubble = () => {
  const [size, setSize] = useState(1);
  const sizeAnimation = useAnimation(animationConfig(size));

  return <TouchableWithoutFeedback onPressIn={() => setSize(1.2)} onPressOut={() => setSize(1)}>
    <Animated.View style={[styles.bubble, { transform: [{scaleX: sizeAnimation }, {scaleY: sizeAnimation }]}]} />
  </TouchableWithoutFeedback>
};

const styles = StyleSheet.create({
  bubble: {
    backgroundColor: 'red',
    padding: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    width: 100,
    height: 100,
  },
});

export default Bubble;