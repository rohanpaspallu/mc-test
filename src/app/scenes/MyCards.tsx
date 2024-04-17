import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Avatar, Button} from 'react-native-paper';
import SecondModal from './SecondModal';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MyCards = (props: any) => {
  const {data, setData} = props;

  const [selectedCard, setSelectedCard] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (card: any) => {
    setSelectedCard(card);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {data.map((item: any) => (
        <Card
          key={item.id}
          style={[
            styles.card,
            item.filled && {borderColor: '#E35205', borderWidth: 4},
          ]}>
          <Card.Content style={styles.cardContent}>
            <View style={styles.avatarContainer}>
              <Avatar.Image source={item.logo} size={100} />
              {item.filled && (
                <View style={styles.iconContainer}>
                  <MaterialIcons name="check-circle" size={20} color="green" />
                </View>
              )}
            </View>
          </Card.Content>
          <Card.Actions style={styles.actions}>
            {!item?.filled ? (
              <Button
                mode="outlined"
                style={{
                  backgroundColor: 'white',
                  borderColor: '#E35205',
                  borderWidth: 2,
                  borderRadius: 4,
                }}
                labelStyle={{color: '#E35205', fontSize: 18}}
                onPress={() => openModal(item)}>
                Continue
              </Button>
            ) : (
              <View style={{alignSelf: 'center', right: 10}}>
                <LinearGradient
                  colors={['#E35205', '#F98E20']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={{
                    borderRadius: 4,
                    overflow: 'hidden',
                  }}>
                  <Button labelStyle={{color: 'white', fontSize: 18}}>
                    Connected
                  </Button>
                </LinearGradient>
              </View>
            )}
          </Card.Actions>
        </Card>
      ))}

      {modalVisible && (
        <SecondModal
          modalVisible
          setModalVisible={setModalVisible}
          selectedCard={selectedCard}
          setData={setData}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  card: {
    width: '45%',
    margin: '2.5%',
  },
  cardContent: {
    alignItems: 'center',
  },
  actions: {
    justifyContent: 'center',
    alignItems: 'center',
    right: 15,
    paddingVertical: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    right: -20,
    backgroundColor: 'transparent',
  },
});

export default MyCards;
