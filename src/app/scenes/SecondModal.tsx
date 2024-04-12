import React, { useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Avatar, IconButton, MD3Colors, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SecondModal = (props) => {
    const { modalVisible, setModalVisible, selectedCard, setData } = props
    const [formData, setFormData] = useState({ username: '', password: '' });
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(false);
            }}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.container}>
                        <Avatar.Image source={selectedCard.id} size={100} />
                        <View style={styles.iconContainer}>
                            <IconButton
                                icon="close"
                                size={20}
                                onPress={() => setModalVisible(false)}
                            />
                        </View>
                    </View>
                    <Text>Connect {selectedCard.title}</Text>
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
        marginTop: -10
    },
});

export default SecondModal;
