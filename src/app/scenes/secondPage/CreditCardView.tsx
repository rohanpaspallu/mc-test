import {
  creditCardDate,
  formatCreditCardNumber,
  formatMastercard,
} from '../../utilities/commonFunctions';
import React from 'react';
import {Image, ScrollView, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button, Text} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const imageSources = [
  {
    id: 1,
    url: '../../../assets/images/MasterCardImage.png',
    cardNo: 5426123456781234,
    expires: new Date(),
    CVC: 200,
  },
  {
    id: 2,
    url: '../../../assets/images/MasterCardImage.png',
    cardNo: 5426456112307894,
    expires: new Date(),
    CVC: 300,
  },
  {
    id: 3,
    url: '../../../assets/images/MasterCardImage.png',
    cardNo: 5426987654321023,
    expires: new Date(),
    CVC: 400,
  },
];

const CreditCardView = (props: any) => {
  const {isLocked, cardDetails} = props;

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.headerContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: cardDetails ? 10 : -100,
          }}>
          {imageSources.map((source, index) => (
            <View key={index} style={{position: 'relative'}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginVertical: 20,
                  textAlign: 'center',
                }}>
                {formatMastercard(source.cardNo)}
              </Text>
              <View>
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

              {cardDetails && (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 30,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      console.log('apple wallet clicked');
                    }}>
                    <Image
                      source={require('../../../assets/images/appleWallet.jpg')}
                      style={{
                        width: 136,
                        height: 42.02,
                        borderRadius: 10,
                      }}
                    />
                  </TouchableOpacity>

                  <Text style={styles.headerStyle}>Card Number</Text>
                  <Text style={styles.value}>
                    {formatCreditCardNumber(source.cardNo)}
                  </Text>
                  <View style={styles.separatorHorizontal} />
                  <View style={styles.rowContainer}>
                    <View style={styles.itemContainer}>
                      <Text style={styles.headerStyle}>Expiration Date</Text>
                      <Text style={styles.value}>
                        {creditCardDate(source.expires)}
                      </Text>
                    </View>
                    <View style={styles.separatorVertical} />
                    <View style={styles.itemContainer}>
                      <Text style={styles.headerStyle}>CVC</Text>
                      <Text style={styles.value}>{source.CVC}</Text>
                    </View>
                  </View>
                  <Button
                    mode="outlined"
                    style={styles.payment}
                    labelStyle={{color: '#E35205', fontSize: 18}}
                    onPress={() => console.log('clicked')}>
                    Copy Card Number
                  </Button>
                </View>
              )}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerStyle: {
    color: '#E35205',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 30,
  },
  value: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  separatorHorizontal: {
    width: '85%',
    height: 1,
    marginVertical: 20,
    backgroundColor: '#ADADAD',
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
  separatorVertical: {
    marginTop: 30,
    height: '50%',
    width: 1,
    backgroundColor: '#ADADAD',
  },
  payment: {
    width: '90%',
    backgroundColor: 'white',
    borderColor: '#E35205',
    borderWidth: 2,
    borderRadius: 3,
    paddingHorizontal: 24,
    paddingVertical: 5,
    marginBottom: 30,
  },
});
export default CreditCardView;
