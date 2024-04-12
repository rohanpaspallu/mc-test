import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, Modal, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar, Button, IconButton, Text} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AllSetModal = (props: any) => {
  const {modalVisible, setModalVisible} = props;
  const navigation = useNavigation();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.container}>
            <View style={styles.avatarContainer}>
              <Avatar.Icon
                style={styles.avatar}
                size={100}
                icon={() => (
                  <>
                    <LinearGradient
                      colors={['#E35205', '#F98E20']} // Colors for the gradient, adjust as needed
                      start={{x: 0, y: 0}} // Start point of the gradient (left)
                      end={{x: 1, y: 0}} // End point of the gradient (right)
                      style={[StyleSheet.absoluteFill, {borderRadius: 50}]}
                    />
                    <MaterialIcons name="task-alt" size={60} color="white" />
                  </>
                )}
              />
            </View>
            <View style={styles.iconContainer}>
              <IconButton
                icon="close"
                size={20}
                onPress={() => setModalVisible(false)}
              />
            </View>
            <Text style={styles.firstText}>All Set! </Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.secondText}>Enjoy your digital journey.</Text>
          </View>
          <LinearGradient
            colors={['#E35205', '#F98E20']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.gradientBorder}>
            <Button
              style={styles.connectedButton}
              labelStyle={{color: 'white', fontSize: 18}}
              onPress={() => navigation.navigate('SecondPage')}>
              View Dashboard
            </Button>
          </LinearGradient>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingVertical: 10,
    borderRadius: 10,
    width: '90%',
  },
  container: {
    alignItems: 'center',
    position: 'relative',
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    marginTop: -10,
  },
  icon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  avatarContainer: {
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 100,
    padding: 0,
    marginTop: '-15%',
  },
  avatar: {
    backgroundColor: '#E35205', // Background color of the Avatar
  },
  gradientBorder: {
    width: '90%',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 5,
    marginBottom: 16,
    marginTop: 100,
    overflow: 'hidden',
  },
  connectedButton: {
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  firstText: {
    marginTop: 10,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333333',
  },
  secondText: {
    marginTop: 10,
    color: '#5C5C5C',
    fontSize: 18,
    fontWeight: 'bold',
    right: 15,
    textAlign: 'center',
  },
});

export default AllSetModal;
