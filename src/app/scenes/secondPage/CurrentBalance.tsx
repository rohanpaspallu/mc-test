import {formatCurrency} from '../../utilities/commonFunctions';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ProgressBar, Text} from 'react-native-paper';

const CurrentBalance = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.currency}>{formatCurrency(1000)}</Text>
      </View>
      <View>
        <Text style={{color: '#5C5C5C', fontSize: 18, fontWeight: '300'}}>
          Current Balance
        </Text>
      </View>
      <View style={styles.progressContainer}>
        <ProgressBar
          progress={1000 / 10000}
          color={'#7A9A02'}
          style={{borderRadius: 50, height: 10}}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textBalance}>Available Credit:</Text>
        <Text style={styles.textCurrency}>{formatCurrency(9000)}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textBalance}>Total Credit Limit:</Text>
        <Text style={styles.textCurrency}>{formatCurrency(10000)}</Text>
      </View>
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
    marginVertical: 20,
    paddingHorizontal: 20,
    width: '100%',
  },
  currency: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  progressContainer: {
    marginVertical: 20,
    width: '100%',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: 20,
  },
  textBalance: {flex: 1, fontSize: 14, alignItems: 'flex-start'},
  textCurrency: {fontSize: 14, alignItems: 'flex-end'},
});

export default CurrentBalance;
