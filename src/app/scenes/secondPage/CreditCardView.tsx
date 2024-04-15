import React from 'react';
import {Image, ScrollView, View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const imageSources = [
  {id: 1, url: '../../../assets/images/MasterCardImage.png'},
  {id: 2, url: '../../../assets/images/MasterCardImage.png'},
  {id: 3, url: '../../../assets/images/MasterCardImage.png'},
];

const CreditCardView = (props: any) => {
  const {isLocked} = props;

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {imageSources.map((source, index) => (
          <View key={index} style={{position: 'relative'}}>
            <Image
              source={require('../../../assets/images/MasterCardImage.png')}
              style={{
                width: 350,
                height: 200,
                marginHorizontal: 15,
                borderRadius: 10,
              }}
            />
            {isLocked && (
              <View
                style={{
                  ...StyleSheet.absoluteFillObject,
                  backgroundColor: 'rgba(128, 128, 128, 0.8)',
                  borderRadius: 10,
                  marginHorizontal: 15,
                  alignItems: 'center',
                }}>
                <View style={{paddingTop: 30}}>
                  <MaterialIcons name="lock" size={30} color="white" />
                </View>
                <Text style={{color: 'white', fontWeight: 'bold', top: 10}}>
                  Your card has been temporarily locked
                </Text>
              </View>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default CreditCardView;
