import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import {SvgXml} from 'react-native-svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const OptionsView = (props: any) => {
  const {options} = props;
  return (
    <View>
      {options.map((item: any, index: number) => (
        <View key={index} style={styles.container}>
          <View style={styles.mainIconContainer}>
            <SvgXml xml={item.icon} width="25" height="25" />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => {
                console.log(`${item.name} clicked`);
              }}>
              <Text style={styles.spanItem}>{item.option}</Text>
              <MaterialIcons name="chevron-right" size={24} color="#ADADAD" />
            </TouchableOpacity>
          </View>
        </View>
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
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  mainIconContainer: {
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 16,
    left: 5,
  },
  spanItem: {
    fontSize: 14,
    color: '#333333',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default OptionsView;
