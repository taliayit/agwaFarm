import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Category from '../components/Category';
import Parse from "parse/react-native.js";

export default function Farm({route, navigation}) {
    const { farmId, farmName } = route.params;
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        // set navigation title
        navigation.setOptions({
          title: farmName,
        });
        readFarmPlants();
    }, []);
    
    const readFarmPlants = async function () {
        // read parse objects and filter by farm id
        const parseQuery = new Parse.Query('Farm');
        parseQuery.equalTo("objectId", farmId);
        try {
            let farm = await parseQuery.find();
            // set results to state variable
            if(farm) {
                if(farm[0].get('categories')) {
                    setCategories(farm[0].get('categories'));
                }
            }
            return true;
        } catch (error) {
            // handle error exception
            console.error(error.message);
            return false;
        };
    };

    const updateFarmPlants = async function () {
        // Create a new farm parse object instance and set farm id
        let Farm = new Parse.Object('Farm');
        Farm.set('objectId', farmId);
        // Set new done value and save Parse Object changes
        Farm.set('categories', categories);
        try {
            await Farm.save();
            console.log('Success!', 'Farm updated!');
            return true;
        } catch (error) {
            console.error(error.message);
            return false;
        };
    };

    function updatePlant(id, qty, catId) {
        let items = [...categories];
        let item = items.find(c => c.id === catId);
        let plant = item.plants.find(p => p.id === id);
        plant.quantity = qty;
        updateFarmPlants(items);
        setCategories(items);
    }

    return (
        <ScrollView style={styles.container}>
            {categories && <View>
                {categories.map(category => (
                    <Category 
                        key={category.id}
                        category={category}
                        onPlantChange={updatePlant}
                    />
                ))}
            </View>}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    
});