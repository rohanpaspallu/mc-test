import React from 'react';
import {ScrollView, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import ButtonCard from './ButtonCard';
import {
  appleWalletColored,
  authorizedUsers,
  autoPay,
  faceIdColored,
  ficoScore,
  overseasSpend,
  spendLimit,
  statements,
  subscriptions,
  tapAndPay,
} from '../../utilities/commonLogos';
import OptionsView from './OptionsView';

const CD = {
  cardData1: [
    {name: 'Face Id', icon: faceIdColored, option: 'Enabled'},
    {name: 'Apple Wallet', icon: appleWalletColored, option: 'Open'},
    {name: 'Auto Pay', icon: autoPay, option: 'Enabled'},
    {name: 'Online Statements', icon: statements, option: 'Enrolled'},
  ],
  cardData2: [
    {name: 'Manage Subscriptions', icon: subscriptions, option: 3},
    {name: 'Authorized Users', icon: authorizedUsers, option: 1},
  ],
  cardData3: [
    {name: 'Spend Limit Settings', icon: spendLimit, option: null},
    {name: 'Authorized Users', icon: overseasSpend, option: null},
  ],
  cardData4: [
    {name: 'Tap & Pay', icon: tapAndPay, option: null},
    {name: 'FICO Score', icon: ficoScore, option: null},
  ],
};
const CardControlsPage = () => {
  return (
    <ScrollView>
      <View style={{backgroundColor: '#EBEBEB', paddingVertical: 10}}>
        <ButtonCard />
        <View style={{height: 5}} />
        <OptionsView options={CD.cardData1} />
        <View style={{height: 15}} />
        <OptionsView options={CD.cardData2} />
        <View style={{height: 15}} />
        <OptionsView options={CD.cardData3} />
        <View style={{height: 15}} />
        <OptionsView options={CD.cardData4} />
      </View>
    </ScrollView>
  );
};

export default CardControlsPage;
