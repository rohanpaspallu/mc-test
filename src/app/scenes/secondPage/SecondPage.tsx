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
import {
  ControlsLogo,
  cardDetails,
  lockCard,
  lockedCard,
} from '../../utilities/commonLogos';

const SecondPage = () => {
  const [iconSources, setIconSources] = useState([
    {
      id: 1,
      text: 'Controls',
      icon: ControlsLogo,
      isClicked: false,
      iconClicked: ControlsLogo,
    },
    {
      id: 2,
      text: 'Lock Card',
      icon: lockCard,
      isClicked: false,
      iconClicked: lockedCard,
    },
    {
      id: 3,
      text: 'Card Details',
      icon: cardDetails,
      isClicked: false,
      iconClicked: cardDetails,
    },
  ]);
  return (
    <View>
      <ScrollView>
        <View style={styles.content}>
          <CreditCardView
            isLocked={iconSources[1].isClicked}
            cardDetails={iconSources[2].isClicked}
          />
          <CardControls
            iconSources={iconSources}
            setIconSources={setIconSources}
          />
          <CurrentBalance />
          <StatementsView />
          <View style={styles.recentTransactionsContainer}>
            <Text style={styles.recentTransactionsText}>
              Recent Transactions
            </Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  recentTransactionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  recentTransactionsText: {
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
