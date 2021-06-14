import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Farm({route}) {
    const { farmId } = route.params;

    return (
        <View style={styles.container}>
            <Text>{farmId}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    
});