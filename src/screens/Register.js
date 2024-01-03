import { StyleSheet, Text, View, TextInput, Pressable, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from "@expo/vector-icons"
import { auth, firestore } from "../config/firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

const Register = (props) => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [username, setUsername] = useState('')
    const [message, setMessage] = useState('')
    const [made, setMade] = useState(false)

    function SignUp() {
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCreds) => {
                const user = userCreds.user;
                console.log(user.email + " Registered")
                
                const accountDocRef = doc(firestore, 'accounts', user.uid);
                setDoc(accountDocRef, {
                    email: user.email,
                    username: username,
                    streak: 0,
                    rank: 0,
                    lastActivity:null
                });

                setMessage('')
                setMade(true)
                setTimeout(() => {
                    props.onCreate();
                    setMade(false)
                }, 1000)
            })
            .catch((error) => {
                console.log(error)
                setMessage("Something went wrong!")
            });
    }

    return (
        <View style={styles.container}>
            <Text>Register</Text>
            <AntDesign onPress={props.onPress} color={'gray'} style={styles.closeIcon} name="close" size={30} />
            <Text style={styles.title}>Create An Account</Text>
            <TextInput
                placeholder='Email'
                placeholderTextColor={'gray'}
                value={email}
                style={[styles.input, { marginTop: "5%" }]}
                onChangeText={text => setEmail(text)}
            />
            <TextInput
                placeholder='Username'
                placeholderTextColor={'gray'}
                value={username}
                style={styles.input}
                onChangeText={text => setUsername(text)}
            />
            <TextInput
                placeholder='Password (6 characters minimum)'
                placeholderTextColor={'gray'}
                value={pass}
                style={styles.input}
                onChangeText={text => setPass(text)}
            />
            <Text style={styles.errorMessage}>{message}</Text>
            {made ?
                <ActivityIndicator size={'large'} color={"lightgray"} />
                :
                <Pressable onPress={SignUp} style={({ pressed }) => [styles.button, { opacity: pressed ? 0.85 : 1 }]}>
                    <Text style={styles.buttonText}>Create</Text>
                </Pressable>
            }
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'black',
        width: '100%',
        height: "90%",
        position: "absolute",
        top: "10%",
    },
    closeIcon: {
        position: "absolute",
        top: "5%",
        left: '5%'
    },
    input: {
        borderWidth: 1,
        borderColor: "gray",
        height: '8%',
        width: "70%",
        padding: "3%",
        marginVertical: "3%",
        borderRadius: 5,
        color: "lightgray"
    },
    button: {
        height: "7%",
        backgroundColor: "darkgray",
        borderRadius: 5,
        marginTop: "3%",
        justifyContent: "center",
        alignItems: "center",
        width: "55%"
    },
    buttonText: {
        fontFamily: "Lexend-Regular",
        color: "black",
    },
    title: {
        color: "white",
        fontSize: 25,
        fontFamily: "Lexend-Medium",
    },
    errorMessage: {
        color: "red",
        fontFamily: "Lexend-Light",
        fontSize: 10
    }
})
