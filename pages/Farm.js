import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Category from '../components/Category';
import categoriesJson from '../data/categories.json';

export default function Farm({route}) {
    const { farmId } = route.params;
    const categories = categoriesJson;

    // useEffect(() => {
    //     async function getCategories() {
    //         const url = "https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/agwafarm.json";

    //         const plants = axios.get(url).then(response => {
    //             console.log(response.categories);
    //             categories = response.categories;
    //         }).catch(function(error) {
    //             console.error(error);
    //             Alert.alert(error)
    //         })
    //     }    
    //     getCategories();
    // }, [])

  
    return (
        <View style={styles.container}>
            {categories && <View>
                {categories.map(category => (
                    <Category key={category.id} category={category} />
                ))}
            </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    
});