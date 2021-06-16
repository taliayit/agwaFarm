import React from 'react';
import { useEffect } from 'react';
import { Text, ScrollView, StyleSheet, Image } from 'react-native';
import plantsJson from '../data/plants.json';

export default function Plant({route, navigation}) {
    const { plant } = route.params;
    const plantInfo = plantsJson.find(p => p.id === plant.id);
    let desc = "";

    if(plantInfo)
        desc = plantInfo.description;
    else
        desc = "No description."

    useEffect(() => {
        // set navigation title
        navigation.setOptions({
          title: plant.name,
        });
    }, []);

    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{uri: plant.image}} />
            <Text style={styles.name}>{plant.name}</Text>
            <Text style={styles.desc}>{desc}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 30,
    },
    image: {
        backgroundColor: "#fff",
        width: "100%",
        aspectRatio: 1,
        marginBottom: 10,
    },
    name: {
        fontSize: 22,
        fontWeight: "500",
        marginBottom: 10,
    },
});