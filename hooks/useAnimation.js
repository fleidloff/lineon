import {useEffect} from "react";
import {Animated} from "react-native";

import useAnimatedValue from './useAnimatedValue';

const getInitialValue = (config) => {
  if (typeof config.initialValue !== 'undefined') return config.initialValue;
  return config.toValue;
};

const useAnimation = (config) => {
  const animatedValue = useAnimatedValue(getInitialValue(config));
  const animate = () => {
    Animated.timing(animatedValue, {
      type: 'timing',
      initialValue: 0,
      duration: 300,
      useNativeDriver: false,
      ...config,
    }).start();
  };

  useEffect(animate, [config, animatedValue]);
  return animatedValue;
};

export default useAnimation;
