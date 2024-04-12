import React, { FC, useState } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { DashboardRoutes } from './dashboard.stack';
import { Button, Text } from 'react-native-paper';
import MyCards from './MyCards';
import NetflixLogo from '../../assets/images/Netflix.jpg';
import SpotifyLogo from '../../assets/images/spotify.png';
import UberEatsLogo from '../../assets/images/ubereats.png';
import StarbucksLogo from '../../assets/images/starbucks.png';
import LinearGradient from 'react-native-linear-gradient';

type ScreenProps = StackScreenProps<DashboardRoutes, 'DashboardOnboarding'>;

const OnboardingDashboardScreen: FC<ScreenProps> = ({ navigation }) => {
  const [data, setData] = useState([
    { id: 1, title: 'Netflix', logo: NetflixLogo, filled: false },
    { id: 2, title: 'Spotify', logo: SpotifyLogo, filled: false },
    { id: 3, title: 'UberEats', logo: UberEatsLogo, filled: false },
    { id: 4, title: 'StarBucks', logo: StarbucksLogo, filled: false },
  ]);
  return (
    <>
      <StatusBar
        animated={true}
        translucent={true}
        showHideTransition="fade"
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <View style={styles.container}>
        <Text style={styles.subtitle}>Connect service providers</Text>
        <Text style={styles.description}>
          Select accounts you have that you would like to update with your new credit card
        </Text>

        <View style={{ padding: 10 }}>
          <MyCards data={data} setData={setData} />
        </View>
        {!data.some(item => item.filled) ? <Button
          // onPress={() => navigation.navigate('MyCards')}
          style={styles.button}
          labelStyle={{ color: 'white', fontSize: 18 }}
        >Continue</Button> : <LinearGradient
          colors={['#E35205', '#F98E20']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientBorder}
        >
          <Button
            // onPress={() => navigation.navigate('MyCards')}
            style={styles.connectedButton}
            labelStyle={{ color: 'white', fontSize: 18 }}
          // onPress={onPress}
          >
            Continue
          </Button>
        </LinearGradient>}


        <Button
          mode="outlined"
          style={styles.skipButton}
          labelStyle={{ color: '#E35205', fontSize: 18 }}
        // onPress={() => navigation.navigate('ServiceProviders')}
        >
          Skip for now
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
    marginHorizontal: 50,
    marginBottom: 24,
  },
  button: {
    width: '90%',
    backgroundColor: '#D6D6D6',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  gradientBorder: {
    width: '90%',
    borderWidth: 2,
    borderColor: '#E35205',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginBottom: 16,
    overflow: 'hidden',
  },
  connectedButton: {
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  skipButton: {
    width: '90%',
    backgroundColor: 'white',
    borderColor: '#E35205',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginBottom: 16,
  },
  skipButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white', // Set button text color as per design
    textAlign: 'center',
  },
});

export default OnboardingDashboardScreen;