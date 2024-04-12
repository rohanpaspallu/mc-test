import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Modal, Text } from 'react-native';
import { Card, Avatar, Button, IconButton, MD3Colors } from 'react-native-paper';
import NetflixLogo from '../../assets/images/Netflix.jpg';
import SpotifyLogo from '../../assets/images/spotify.png';
import UberEatsLogo from '../../assets/images/ubereats.png';
import StarbucksLogo from '../../assets/images/starbucks.png';
import MyLoginCard from './MyLoginCard';
import SecondModal from './SecondModal';

const MyCards = () => {
    const [data, setData] = useState([
        { id: 1, title: 'Netflix', logo: NetflixLogo, filled: false },
        { id: 2, title: 'Spotify', logo: SpotifyLogo, filled: false },
        { id: 3, title: 'UberEats', logo: UberEatsLogo, filled: false },
        { id: 4, title: 'StarBucks', logo: StarbucksLogo, filled: false },
    ]);


    const [selectedCard, setSelectedCard] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        console.log(modalVisible)
    }, [modalVisible])


    const openModal = (card) => {
        console.log("here : ", card.logo)
        setSelectedCard(card);
        setModalVisible(true);
    };

    return (
        <View style={styles.container}>
            {data.map(item => (
                <Card key={item.id} style={styles.card}>
                    <Card.Content style={styles.cardContent}>
                        <Avatar.Image source={item.logo} size={100} />
                    </Card.Content>
                    <Card.Actions style={styles.actions}>
                        <Button
                            mode="outlined"
                            style={{
                                backgroundColor: 'white',
                                borderColor: '#E35205',
                                borderWidth: 2,
                                borderRadius: 8,
                            }}
                            labelStyle={{ color: '#E35205', fontSize: 18 }}
                            onPress={() => openModal(item)}
                        >
                            Continue
                        </Button>
                    </Card.Actions>
                </Card>
            ))}

            {modalVisible && <SecondModal modalVisible setModalVisible={setModalVisible} selectedCard={selectedCard} setData={setData} />}
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
        right: 15
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
});

export default MyCards;
