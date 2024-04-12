import React, {useRef} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, Animated, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import OnboardingDashboardScreen from './onboarding.dashboard.screen';
import AllSetModal from './AllSetModal';
import SecondPage from './secondPage/SecondPage';

export type DashboardRoutes = {
  DashboardOnboarding: undefined;
};

const Stack = createStackNavigator<DashboardRoutes>();

export const DashboardStack = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <Stack.Navigator
      initialRouteName="DashboardOnboarding"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent',
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerBackground: () => (
          <Animated.View
            style={[
              styles.headerBackground,
              {
                opacity: scrollY.interpolate({
                  inputRange: [0, 100],
                  outputRange: [1, 0],
                  extrapolate: 'clamp',
                }),
              },
            ]}>
            <LinearGradient
              colors={['#E35205', '#F98E20']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={StyleSheet.absoluteFill}
            />
            <StatusBar barStyle="light-content" />
          </Animated.View>
        ),
      }}>
      <Stack.Screen
        name="DashboardOnboarding"
        component={OnboardingDashboardScreen}
        options={{
          headerTitle: 'Onboarding',
        }}
      />
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          headerTitle: 'Cards',
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
  },
});
