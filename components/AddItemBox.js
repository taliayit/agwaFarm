import React from 'react';
import { Text, View, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Platform } from 'react-native';

export default function AddItemBox({placeholder, inputText, onInputChange, onCreateFarm}) {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}>

            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={inputText}
                onChangeText={text => onInputChange(text)}
            />

            <TouchableOpacity onPress={onCreateFarm}>
                <View style={styles.addWrapper}>
                    <Text style={styles.addText}>+</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    width: "80%",
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: "#6dc474",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20
  },
  addText: {
    fontSize: 30,
    marginBottom: 5,
    color: "#fff"
  }
});