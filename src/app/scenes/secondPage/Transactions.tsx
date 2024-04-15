import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Avatar} from 'react-native-paper';

import DunkinDonutsLogo from '../../../assets/images/dunkindonuts.png';
import AmazonLogo from '../../../assets/images/amazon.png';
import StarbucksLogo from '../../../assets/images/starbucks.png';
import {formatCurrency, formatDate} from '../../utilities/commonFunctions';

const transactionList = [
  {
    id: 1,
    name: 'Starbucks',
    logo: StarbucksLogo,
    date: new Date(),
    owing: 5.43,
    points: 5,
  },
  {
    id: 2,
    name: 'Amazon',
    logo: AmazonLogo,
    date: new Date(),
    owing: 125.3,
    points: 125,
  },
  {
    id: 3,
    name: 'DunkinDonuts',
    logo: DunkinDonutsLogo,
    date: new Date(),
    owing: 10.84,
    points: 10,
  },
];

const Transactions = () => {
  return (
    <View>
      {transactionList.map((item, index) => (
        <View key={index} style={styles.container}>
          <View style={styles.avatarContainer}>
            <Avatar.Image source={item.logo} size={50} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDate}>{formatDate(item.date)}</Text>
          </View>
          <View style={styles.owingContainer}>
            <Text style={styles.itemOwing}>{formatCurrency(item.owing)}</Text>
            <Text style={styles.itemPoints}>+{item.points} pts</Text>
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
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatarContainer: {
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    marginRight: 10,
  },
  owingContainer: {
    alignItems: 'flex-end',
  },
  itemName: {
    fontSize: 16,
    color: '#333333',
    fontWeight: 'bold',
  },
  itemDate: {
    fontSize: 14,
    color: '#888',
  },
  itemOwing: {
    fontSize: 16,
    color: '#333333',
    fontWeight: 'bold',
  },
  itemPoints: {
    fontSize: 14,
    color: '#618DFF',
  },
});

export default Transactions;
