import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import TuneIcon from '../../../assets/images/controls.jpg';
import LockCard from '../../../assets/images/lockcard.jpg';
import CardDetails from '../../../assets/images/carddetails.jpg';
import {IconButton, Text} from 'react-native-paper';

const CardControls = () => {
  const iconSources = [
    {id: 1, text: 'Controls', url: TuneIcon},
    {id: 2, text: 'Lock Card', url: LockCard},
    {id: 3, text: 'Card Details', url: CardDetails},
  ];
  return (
    <View style={styles.container}>
      {iconSources.map((source, index) => (
        <TouchableOpacity
          key={index}
          style={{alignItems: 'center'}}
          onPress={() => console.log('Pressed')}>
          <IconButton
            icon={() => (
              <Image source={source.url} style={{width: 80, height: 80}} />
            )}
            iconColor="#E35205"
            size={100}
          />
          <Text style={styles.text}>{source.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    marginTop: -100,
    paddingHorizontal: 20,
    width: '100%',
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontWeight: '900',
  },
});

export default CardControls;
