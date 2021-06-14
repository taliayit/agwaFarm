import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function FarmItem({name}) {
    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={require("../assets/images/icon.png")} />
            <Text>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      marginBottom: 15,
      padding: 10,
      flexDirection: "row",
      alignItems: "center"
    },
    icon: {
        width: 30,
        height: 30,
        marginRight: 5
    }
});