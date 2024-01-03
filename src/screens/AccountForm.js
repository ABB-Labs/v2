import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ActivityIndicator, Modal } from 'react-native';
import Register from './Register.js';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from '../config/firebase';
import { UserContext } from '../UserContext';
import { auth,firestore } from '../config/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
const AccountForm = () => {
    const navigation = useNavigation();
    const { setUserId } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loggingIn, setLoggingIn] = useState(false);
    const [vis, setVis] = useState(false);

    const LogIn = () => {
        setLoggingIn(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCreds) => {
                const user = userCreds.user;
                console.log(user.email + ' Signed In');
                
                setUserId(user.uid);
                
                const currentDate = new Date().toISOString().split('T')[0];

                const ref = doc(firestore, 'accounts', user.uid);
                const newData = {
                    lastActivity: currentDate,
                  };
                updateDoc(ref, newData);
    
                setTimeout(() => {
                    navigation.openDrawer();
                    setLoggingIn(false);
                    setEmail('');
                    setPassword('');
                    setMessage('');
                    console.log("User context:", user.uid);
                }, 1000);
            })
            .catch((error) => {
                console.log(error);
                setMessage('Invalid Email or Password!');
                setLoggingIn(false);
            });
    };
    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Log In</Text>
            <TextInput
                placeholder="Email"
                placeholderTextColor="gray"
                value={email}
                style={[styles.input, { marginTop: '5%' }]}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                placeholder="Password"
                placeholderTextColor="gray"
                value={password}
                style={styles.input}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />
            <Text style={styles.message}>{message}</Text>
            {loggingIn ? (
                <ActivityIndicator size="large" color="lightgray" />
            ) : (
                <Pressable
                    onPress={LogIn}
                    style={({ pressed }) => [styles.button, { opacity: pressed ? 0.85 : 1 }]}
                >
                    <Text style={styles.buttonText}>Log in</Text>
                </Pressable>
            )}

            <Pressable onPress={() => setVis(true)} style={styles.createButton}>
                <Text style={styles.createButtonText}>Create An Account</Text>
            </Pressable>

            <Modal visible={vis} animationType="slide">
                <View style={styles.modalContainer}>
                    <Register onCreate={() => setVis(false)} onPress={() => setVis(false)} />
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        width: '100%',
    },
    button: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    message: {
        color: 'red',
        marginTop: 10,
    },
    createButton: {
        marginTop: 20,
        backgroundColor: 'green', // Change the color to your preference
        padding: 15,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    createButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff', // Change the background color if needed
    },
});

export default AccountForm;
