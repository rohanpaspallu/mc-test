import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {SvgXml} from 'react-native-svg';
import {
  creditLimit,
  newCard,
  notifications,
  resetPin,
} from '../../utilities/commonLogos';

const buttonData = [
  {id: 1, title: 'Reset Pin', icon: resetPin},
  {id: 2, title: 'Notifications', icon: notifications},
  {id: 3, title: 'Request New Card', icon: newCard},
  {id: 4, title: 'Adjust Credit Limit', icon: creditLimit},
];

const ButtonCard = () => {
  const handlePress = title => {
    // Handle press event here
    console.log(`Pressed ${title}`);
  };

  return (
    <View style={styles.container}>
      {buttonData.map(item => (
        <TouchableOpacity
          key={item.id}
          onPress={() => handlePress(item.title)}
          style={styles.touchable}>
          <Card style={styles.card}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <SvgXml xml={item.icon} width="25" height="25" />
              <Text style={styles.textStyle}>{item.title}</Text>
            </View>
          </Card>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginHorizontal: 15,
    marginVertical: 5,
  },
  touchable: {
    width: '45%',
    margin: '2.5%',
  },
  card: {
    borderColor: '#E35205',
    borderWidth: 2,
    borderRadius: 4,
  },
  textStyle: {
    color: '#E35205',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
  },
});

export default ButtonCard;
