import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput, Image, Alert } from 'react-native';
import Parse from "parse/react-native.js";
import {useNavigation} from '@react-navigation/native';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // use useNavigation hook
    const navigation = useNavigation();

    const doUserLogIn = async function () {
        const usernameValue = email;
        const passwordValue = password;
        return await Parse.User.logIn(usernameValue, passwordValue)
          .then(async (loggedInUser) => {
            // logIn returns the corresponding ParseUser object
            Alert.alert(
              'Success!',
              `User ${loggedInUser.get('username')} has successfully signed in!`,
            );
            // To verify that this is in fact the current user, currentAsync can be used
            const currentUser = await Parse.User.currentAsync();
            console.log(loggedInUser === currentUser);
            // navigate home screen
            navigation.navigate('Home');
            return true;
          })
          .catch((error) => {
            // Error can be caused by wrong parameters or lack of Internet connection
            Alert.alert('Error!', error.message);
            return false;
          });
    };
    
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/images/logo.png")} />

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    keyboardType={'email-address'}
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity style={styles.loginBtn} onPress={() => doUserLogIn()}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.signupText}>Signup</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "15%"
    },
    image: {
        width: 200,
        height: 200
    },
    inputView: {
        width:"100%",
        height: 45,
        backgroundColor: "#ddd",
        marginBottom: 20,
        alignItems: "center",
        borderRadius: 5,
    },
    TextInput: {
        height: 50,
        width: "100%",
        flex: 1,
        padding: 10,
    },
    loginBtn: {
        width: "100%",
        paddingVertical: 15,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 20,
        backgroundColor: "#6dc474",
        borderRadius: 5
    },
    loginText: {
        color: "white",
        fontWeight:"bold",
    },
});
