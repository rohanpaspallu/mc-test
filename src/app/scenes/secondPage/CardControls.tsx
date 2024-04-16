import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

import {IconButton, Text} from 'react-native-paper';

const CardControls = (props: any) => {
  const {iconSources, setIconSources} = props;
  const navigation = useNavigation();

  const handleIconPress = (index: any) => {
    setIconSources((prevIconSources: any) =>
      prevIconSources.map((source: any, i: any) =>
        i === index ? {...source, isClicked: !source.isClicked} : source,
      ),
    );
    if (index === 0) {
      navigation.navigate('CardControls');
    }
  };

  return (
    <View style={styles.container}>
      {iconSources.map((source: any, index: any) => (
        <TouchableOpacity
          key={index}
          style={{alignItems: 'center'}}
          onPress={() => handleIconPress(index)}>
          <IconButton
            icon={() => (
              <Image
                source={source.isClicked ? source.iconClicked : source.icon}
                style={{width: 80, height: 80}}
              />
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
