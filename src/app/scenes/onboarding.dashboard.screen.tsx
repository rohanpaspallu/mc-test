import React, { FC } from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { DashboardRoutes } from './dashboard.stack';
import { Avatar, Button, Card, Text } from 'react-native-paper';

type ScreenProps = StackScreenProps<DashboardRoutes, 'DashboardOnboarding'>;
const data = [
  { id: 1, title: 'Netflix', logo: 'https://dummyimage.com/100x100/000/fff&text=N' },
  { id: 2, title: 'Spotify', logo: 'https://dummyimage.com/100x100/007700/fff&text=S' },
  { id: 3, title: 'UberEats', logo: 'https://dummyimage.com/100x100/000077/fff&text=U' },
  { id: 4, title: 'StarBucks', logo: 'https://dummyimage.com/100x100/770000/fff&text=SB' },
];

const OnboardingDashboardScreen: FC<ScreenProps> = ({ navigation }) => {
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
          {data.map((item) => (
            <Card key={item.id} style={{ marginVertical: 10 }}>
              <Card.Title
                title=""
                left={(props) => <Avatar.Image {...props} source={{ uri: item.logo }} />}
              />
              <Card.Actions>
                <Button mode="contained" onPress={() => console.log('Connected')}>
                  Connect
                </Button>
              </Card.Actions>
            </Card>
          ))}
        </View>
        <Button
          // onPress={() => navigation.navigate('ServiceProviders')}
          style={styles.button}
          labelStyle={{ color: 'white', fontSize: 18 }}
        >Continue</Button>

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
    // color: 'white', // Set text color as per design
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    // color: 'white', // Set text color as per design
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#333333', // Set text color as per design
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
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white', // Set button text color as per design
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