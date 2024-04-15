import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import CardControls from './CardControls';
import CreditCardView from './CreditCardView';
import CurrentBalance from './CurrentBalance';
import StatementsView from './StatementsView';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Transactions from './Transactions';
import ControlsIcon from '../../../assets/images/controls.jpg';
import LockCard from '../../../assets/images/lockcard.jpg';
import LockedCard from '../../../assets/images/lockedCard.jpg';
import CardDetails from '../../../assets/images/carddetails.jpg';
const SecondPage = () => {
  const [iconSources, setIconSources] = useState([
    {
      id: 1,
      text: 'Controls',
      icon: ControlsIcon,
      isClicked: false,
      iconClicked: ControlsIcon,
    },
    {
      id: 2,
      text: 'Lock Card',
      icon: LockCard,
      isClicked: false,
      iconClicked: LockedCard,
    },
    {
      id: 3,
      text: 'Card Details',
      icon: CardDetails,
      isClicked: false,
      iconClicked: CardDetails,
    },
  ]);
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 15,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginVertical: 20}}>
          Mastercard •••• 1234
        </Text>
        <CreditCardView isLocked={iconSources[1].isClicked} />
        <CardControls
          iconSources={iconSources}
          setIconSources={setIconSources}
        />
        <CurrentBalance />
        <StatementsView />
        <View style={styles.recentTransactionsContainer}>
          <Text style={styles.recentTransactionsText}>Recent Transactions</Text>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => {
              console.log('view clicked');
            }}>
            <Text style={styles.recentTransactionsSpan}>View All</Text>
            <MaterialIcons name="chevron-right" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Transactions />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  recentTransactionsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  recentTransactionsText: {
    flex: 1,
    fontSize: 14,
    alignItems: 'flex-start',
    color: '#333333',
    fontWeight: 'bold',
  },
  recentTransactionsSpan: {
    fontSize: 14,
    alignItems: 'flex-end',
    color: '#333333',
    fontWeight: 'bold',
    paddingTop: 3,
  },
});

export default SecondPage;
