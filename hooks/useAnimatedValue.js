import {useRef} from "react";
import {Animated} from "react-native";

const useAnimatedValue = (initialValue) => {
  const ref = useRef(new Animated.Value(initialValue));
  return ref.current;
};

export default useAnimatedValue;