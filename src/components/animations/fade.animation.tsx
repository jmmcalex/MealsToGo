import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

type FadeInViewProps = {
  duration?: number;
  children: React.ReactNode;
  [x: string]: any;
};

export const FadeInView = ({
  children,
  duration = 1500,
  ...props
}: FadeInViewProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, duration]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {children}
    </Animated.View>
  );
};
