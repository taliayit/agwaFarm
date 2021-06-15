import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PlantItem from './PlantItem';

export default function Category({category}) {
    return (
        <View style={styles.container}>
            <Text style={styles.categoryName}>{category.name}</Text>
            
            {category.plants.map(plant => (
                <PlantItem key={plant.id} plant={plant} min={category.minSelection} max={category.maxSelection}/>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor: "#ddd",
        borderBottomWidth: 1,
        paddingHorizontal: 30
    },
    categoryHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    categoryName: {
        fontSize: 22,
        fontWeight: 500,
        marginVertical: 10
    }
});