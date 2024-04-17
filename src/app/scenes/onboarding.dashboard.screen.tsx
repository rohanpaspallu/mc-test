import React, {FC, useState} from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';
import {DashboardRoutes} from './dashboard.stack';
import {Button, Text} from 'react-native-paper';
import MyCards from './MyCards';
import NetflixLogo from '../../assets/images/Netflix.jpg';
import SpotifyLogo from '../../assets/images/spotify.png';
import UberEatsLogo from '../../assets/images/ubereats.png';
import StarbucksLogo from '../../assets/images/starbucks.png';
import LinearGradient from 'react-native-linear-gradient';
import AllSetModal from './AllSetModal';
import MyButtons from '../components/MyButtons';

type ScreenProps = StackScreenProps<DashboardRoutes, 'DashboardOnboarding'>;

const OnboardingDashboardScreen: FC<ScreenProps> = ({navigation}) => {
  const [data, setData] = useState([
    {id: 1, title: 'Netflix', logo: NetflixLogo, filled: false},
    {id: 2, title: 'Spotify', logo: SpotifyLogo, filled: false},
    {id: 3, title: 'UberEats', logo: UberEatsLogo, filled: false},
    {id: 4, title: 'StarBucks', logo: StarbucksLogo, filled: false},
  ]);
  const [modalVisible, setModalVisible] = useState(false);
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
          Select accounts you have that you would like to update with your new
          credit card
        </Text>

        <View style={{padding: 10}}>
          <MyCards data={data} setData={setData} />
        </View>
        {!data.some(item => item.filled) ? (
          <MyButtons
            style={styles.button}
            labelStyle={styles.testLabel}
            text="Continue"
          />
        ) : (
          <LinearGradient
            colors={['#E35205', '#F98E20']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.gradientBorder}>
            <MyButtons
              onPress={() => setModalVisible(true)}
              style={styles.connectedButton}
              labelStyle={{color: 'white'}}
              text="Continue"
            />
          </LinearGradient>
        )}
        <MyButtons
          style={styles.skipButton}
          labelStyle={{color: '#E35205'}}
          onPress={() => setModalVisible(true)}
          text="Skip for now"
          mode="outlined"
        />
        {modalVisible && (
          <AllSetModal modalVisible setModalVisible={setModalVisible} />
        )}
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
    backgroundColor: '#D6D6D6',
  },
  testLabel: {color: 'white'},
  gradientBorder: {
    width: '90%',
    borderRadius: 5,
    paddingHorizontal: 24,
    paddingVertical: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  skipButton: {
    backgroundColor: 'white',
    borderColor: '#E35205',
  },
  connectedButton: {
    width: '100%',
    paddingVertical: -20,
    marginBottom: -4,
  },
});

export default OnboardingDashboardScreen;
