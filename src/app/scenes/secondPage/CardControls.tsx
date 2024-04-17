import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import TouchID from 'react-native-touch-id';

const updateData = (setIconSources: any, index: number) => {
  setIconSources(prevIconSources =>
    prevIconSources.map((source: any, i: number) =>
      i === index && (index === 1 || index === 2)
        ? {...source, isClicked: !source.isClicked}
        : source,
    ),
  );
};

const CardControls = (props: any) => {
  const {iconSources, setIconSources} = props;
  const navigation = useNavigation();

  const handleAuthenticate = (index: number) => {
    TouchID.authenticate('Authenticate with your fingerprint')
      .then(() => {
        // setIconSources(prevIconSources =>
        //   prevIconSources.map((source: any, i: number) =>
        //     i === index && (index === 1 || index === 2)
        //       ? {...source, isClicked: !source.isClicked}
        //       : source,
        //   ),
        // );
        updateData(setIconSources, index);
      })
      .catch(error => {
        console.log('Authentication Failed', error);
      });
  };

  const handleIconPress = (index: number, isClicked: boolean) => {
    if (index === 1 || index === 2) {
      if (index === 2 && isClicked) {
        updateData(setIconSources, index);
      } else {
        handleAuthenticate(index);
      }
    } else {
      if (index === 0) {
        navigation.navigate('CardControls');
      }
    }
  };

  return (
    <View style={styles.container}>
      {iconSources.map((source: any, index: number) => (
        <TouchableOpacity
          key={index}
          style={{alignItems: 'center'}}
          onPress={() => handleIconPress(index, source.isClicked)}>
          <SvgXml
            xml={source.isClicked ? source.iconClicked : source.icon}
            width="70"
            height="70"
          />
          <Text style={styles.text}>{source.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    paddingHorizontal: 30,
    width: '100%',
    borderTopWidth: 0.2,
    borderBottomColor: '#EBEBEB',
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontWeight: '900',
  },
});

export default CardControls;
