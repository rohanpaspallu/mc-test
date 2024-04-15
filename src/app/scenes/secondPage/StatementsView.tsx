import {formatCurrency} from '../../utilities/commonFunctions';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, DataTable, Text} from 'react-native-paper';
const StatementsView = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerStyle}>Payment Due in 5 days</Text>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.label}>Statement Balance</Text>
          <Text style={styles.value}>{formatCurrency(600)}</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.itemContainer}>
          <Text style={styles.label}>Minimum Payment</Text>
          <Text style={styles.value}>{formatCurrency(60)}</Text>
        </View>
      </View>

      <Button
        mode="outlined"
        style={styles.payment}
        labelStyle={{color: '#E35205', fontSize: 18}}
        onPress={() => console.log('clicked')}>
        Make a payment
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    paddingHorizontal: 20,
    width: '100%',
  },
  headerStyle: {
    color: '#E35205',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 30,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  itemContainer: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: '#5C5C5C',
    marginBottom: 5,
    textAlign: 'center',
  },
  value: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  separator: {
    height: '100%',
    width: 1,
    backgroundColor: '#EBEBEB',
  },
  payment: {
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#E35205',
    borderWidth: 2,
    borderRadius: 3,
    paddingHorizontal: 24,
    paddingVertical: 5,
    marginBottom: 30,
  },
});

export default StatementsView;
