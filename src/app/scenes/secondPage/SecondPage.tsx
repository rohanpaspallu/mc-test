import React from 'react';
import {ScrollView, View} from 'react-native';
import {Text} from 'react-native-paper';
import CardControls from './CardControls';
import CreditCardView from './CreditCardView';
import CurrentBalance from './CurrentBalance';
import StatementsView from './StatementsView';

const SecondPage = () => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginVertical: 20}}>
          Mastercard •••• 1234
        </Text>
        <CreditCardView />
        <CardControls />
        <CurrentBalance />
        <StatementsView />
      </View>
    </ScrollView>
  );
};

export default SecondPage;
