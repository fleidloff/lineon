import React, {useState} from "react";
import {Text, View, StyleSheet, Animated, TouchableWithoutFeedback} from 'react-native';
import useAnimation from '../hooks/useAnimation';

const animationConfig = (value) => ({
  toValue: value,
  duration: 100,
  useNativeDriver: true,
});

const Bubble = () => {
  const [size, setSize] = useState(1);
  const [active, setActive] = useState(false);
  const sizeAnimation = useAnimation(animationConfig(size));

  const onPressIn = () => {
    setSize(1.1);
    setActive(!active);
  };

  const onPressOut = () => {
    setSize(1)
  };

  return <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut}>
    <Animated.View style={[styles.bubble, active && styles.active, { transform: [{scaleX: sizeAnimation }, {scaleY: sizeAnimation }] }]} />
  </TouchableWithoutFeedback>
};

const styles = StyleSheet.create({
  bubble: {
    backgroundColor: '#FFFFFF',
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1000,
    minHeight: 50,
    minWidth: 50,
  },
  active: {
    backgroundColor: '#FF0000',
  }
});

export default Bubble;