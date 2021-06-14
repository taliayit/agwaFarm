import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Agwa Farm</Text>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
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

            <TouchableOpacity style={styles.loginBtn}>
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
        width: "70%",
    },
    title: {
        fontSize: 34,
        fontWeight:"bold",
        marginBottom: 30
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
        padding: 15,
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
