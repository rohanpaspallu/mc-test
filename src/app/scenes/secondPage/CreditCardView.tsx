import React from 'react';
import {Image, ScrollView, View} from 'react-native';

const imageSources = [
  {id: 1, url: '../../../assets/images/MasterCardImage.png'},
  {id: 2, url: '../../../assets/images/MasterCardImage.png'},
  {id: 3, url: '../../../assets/images/MasterCardImage.png'},
];
const CreditCardView = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {imageSources.map((source, index) => (
          <Image
            key={index}
            source={require('../../../assets/images/MasterCardImage.png')}
            style={{
              width: 350,
              height: 200,
              marginHorizontal: 15,
              borderRadius: 10,
            }}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default CreditCardView;
