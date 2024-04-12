import React, { useState } from 'react';
import { Dimensions, Modal, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Avatar, Button, IconButton, Snackbar, Text } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SecondModal = (props: any) => {
    const { modalVisible, setModalVisible, selectedCard, setData } = props
    const [formData, setFormData] = useState({ username: '', password: '' });
    const { username, password } = formData;
    const [showPassword, setShowPassword] = useState(false);
    const [snackbarInfo, setSnackBarInfo] = useState({ isVisible: false, message: '' });
    const onChange = (text: string, name: string) => {
        setFormData((prevState) => ({
            ...prevState,
            [name]: text,
        }));
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (e: any) => {
        e.preventDefault();
        if (!formData.username || !formData.password) {
            setSnackBarInfo({ isVisible: true, message: 'Please fill in all required fields.' });
            setTimeout(() => {
                setSnackBarInfo((prevState) => ({ ...prevState, isVisible: false }));
            }, 3000);
            return;
        }
        setData((prevData: any) => prevData.map((item: any) => {
            if (item.id === selectedCard.id) {
                return { ...item, filled: true };
            }
            return item;
        }));

        setModalVisible(false)

    };
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
                        <Avatar.Image source={selectedCard.id} size={70} style={{ marginTop: 20 }} />
                        <View style={styles.iconContainer}>
                            <IconButton
                                icon="close"
                                size={20}
                                onPress={() => setModalVisible(false)}
                            />

                        </View>
                        <Text style={{ marginTop: 10, fontSize: 16, fontWeight: 'bold' }}>Connect {selectedCard.title}</Text>
                    </View>

                    <Text style={[styles.label, styles.leftAlignLabel]}>User Name</Text>
                    <View style={styles.inputContainer}>
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter username"
                                placeholderTextColor="black"
                                autoCapitalize="none"
                                value={username}
                                onChangeText={(text) => onChange(text, 'username')}
                            />
                        </View>
                    </View>
                    <Text style={[styles.label, styles.leftAlignLabel]}>Password</Text>
                    <View style={styles.inputContainer}>
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter password"
                                placeholderTextColor="black"
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={(text) => onChange(text, 'password')}
                            />
                            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.toggleButton}>
                                {showPassword ? (
                                    <MaterialIcons name="visibility" size={24} color="black" />
                                ) : (
                                    <MaterialIcons name="visibility-off" size={24} color="black" />
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.container}>
                        <Text style={{ marginTop: 10, fontSize: 10, width: '85%', right: 15, textAlign: 'center', }}>By clicking the button below, you agree to the Terms and Conditions for connecting your {selectedCard.title} account.</Text>
                    </View>

                    <Button
                        mode="contained"
                        style={{ backgroundColor: '#333333', color: 'white', width: '90%', borderRadius: 5, marginVertical: 20 }}
                        labelStyle={{ color: 'white' }}
                        onPress={handleLogin}
                    >
                        Connect
                    </Button>
                </View>

            </View>

            <Snackbar
                visible={snackbarInfo.isVisible}
                onDismiss={() => setSnackBarInfo((prevState) => ({ ...prevState, isVisible: true }))}
            >
                <LinearGradient
                    colors={['#E35205', '#F98E20']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradientContainer}
                >
                    <Text style={styles.messageText}>{snackbarInfo.message}</Text>
                </LinearGradient>
            </Snackbar>
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
    label: {
        fontSize: 10,
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    leftAlignLabel: {
        alignSelf: 'flex-start'
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f3f3f3",
        borderRadius: 5,
        width: "90%",
        marginBottom: Dimensions.get("window").width * 0.02,
        marginTop: Dimensions.get("window").width * 0.02,
    },
    textInputContainer: {
        flex: 1,
        borderWidth: 1,
        borderColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 15,
    },
    input: {
        width: "100%",
        height: 40,
        backgroundColor: "#f3f3f3",
        borderWidth: 1,
        borderColor: "#f3f3f3",
        paddingHorizontal: 10,
        flex: 1,
        textAlignVertical: "center",
    },
    toggleButton: {
        padding: 10,
    },

    gradientContainer: {
        borderRadius: 4,
        paddingVertical: 14,
        paddingHorizontal: 24,
    },
    messageText: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
    },
});

export default SecondModal;
