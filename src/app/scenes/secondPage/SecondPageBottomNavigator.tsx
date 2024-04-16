import React from 'react';
import {BottomNavigation, Text, useTheme} from 'react-native-paper';
import SecondPage from './SecondPage';
import CardControlsPage from './CardControlsPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SecondPageBottomNavigator = () => {
  const [index, setIndex] = React.useState(0);
  const theme = useTheme(); // Get theme object

  const routes = [
    {
      key: 'home',
      title: 'Home',
      icon: 'home',
    },
    {
      key: 'rewards',
      title: 'Rewards',
      icon: 'image',
    },
    {
      key: 'pfm',
      title: 'PFM',
      icon: 'image',
    },
    {
      key: 'more',
      title: 'More',
      icon: 'image',
    },
  ];

  const renderScene = BottomNavigation.SceneMap({
    home: () => <SecondPage />,
    rewards: () => <Text>Rewards Screen</Text>,
    pfm: () => <Text>PFM Screen</Text>,
    more: () => <CardControlsPage />,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{
        backgroundColor: 'white',
        borderTopWidth: 0.2,
        borderBottomColor: '#ADADAD',
      }}
      activeColor="#E35205"
      activeIndicatorStyle={{backgroundColor: 'white'}}
      inactiveColor="#ADADAD"
      renderIcon={({route, focused, color}) => (
        <MaterialIcons name={route.icon} size={20} color={color} />
      )}
    />
  );
};

export default SecondPageBottomNavigator;
