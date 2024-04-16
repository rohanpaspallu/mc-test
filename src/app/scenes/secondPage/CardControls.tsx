import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {Text} from 'react-native-paper';
import {SvgXml} from 'react-native-svg';

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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    paddingHorizontal: 30,
    width: '100%',
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontWeight: '900',
  },
});

export default CardControls;
