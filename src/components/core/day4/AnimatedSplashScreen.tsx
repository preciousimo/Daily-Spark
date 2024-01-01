import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useRef } from 'react';
import Animated, { FadeOut } from 'react-native-reanimated';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const AnimatedSplashScreen = ({
  onAnimationFinish = (isCancelled) => {},
}: {
  onAnimationFinish?: (isCancelled: boolean) => void;
}) => {
  const animation = useRef<LottieView>(null);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}
    >
      <AnimatedLottieView
        exiting={FadeOut.duration(300)}
        ref={animation}
        onAnimationFinish={onAnimationFinish}
        loop={false}
        autoPlay
        style={{
          width: '80%',
          maxWidth: 400,
        }}
        source={require('@assets/lottie/netflix.json')}
      />
    </View>
  );
};

export default AnimatedSplashScreen;