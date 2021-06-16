import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import InputSpinner from "react-native-input-spinner";
import Checkbox from '../components/Checkbox';
import { useNavigation } from '@react-navigation/native';

export default function PlantItem({plant, min, max, onPlantChange}) {
    const [quantity, setQuantity] = useState(plant.quantity);
    const [selected, setSelected] = useState(plant.quantity > 0);
    
    // use useNavigation hook
    const navigation = useNavigation();

    function handleCheckboxChange(value) {
        if(value === false) {
            onPlantChange(plant.id, 0);
            setQuantity(0);
        }
        else {
            onPlantChange(plant.id, 1);
            setQuantity(1);
        }
        setSelected(value);
    }

    function handleQtyChange(qty) {
        onPlantChange(plant.id, qty);
        setQuantity(qty);
    } 

    return (
        <View style={styles.container}>
            <View style={styles.checkboxWrapper}>
                <Checkbox size={20} color="#6dc474" isChecked={selected} onValueChange={handleCheckboxChange}/>
            </View>

            <View style={[styles.itemContainer, selected ? styles.selected : ""]}>
                <Image style={styles.image} source={plant.image ? {uri:plant.image} : require("../assets/images/plant.png")} />
                <View style={styles.textWrapper}>
                    <Text style={styles.name}>{plant.name}</Text>
                    <InputSpinner
                        max={max}
                        min={min}
                        onMin={() => setSelected(false)}
                        onIncrease={() => setSelected(true)}
                        width={75}
                        height={30}
                        buttonFontSize={15}
                        // arrows={true}
                        buttonStyle={{width:20, height:20}}
                        color={"#fff"}
                        value={quantity}
                        onChange={handleQtyChange}
                    />
                </View>

                <TouchableOpacity style={styles.infoWrapper} onPress={()=>navigation.navigate('Plant', {plant: plant})}>
                    <Image style={styles.infoIcon} source={require("../assets/images/info_icon.png")} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: 15,
        
    },
    itemContainer: {
        backgroundColor: "#fff",
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "100%",
    },
    name: {
        fontSize: 16,
        overflow: "hidden",
        maxWidth: 150,
        marginBottom:10,
        fontWeight:"500"
    },
    image: {
        width: 80,
        height: 80,
        marginRight: 5
    },
    infoIcon: {
        width: 30,
        height: 30,
        opacity: 0.6
    },
    infoWrapper: {
        marginLeft: "auto"
    },
    textWrapper: {
        
    },
    checkboxWrapper: {
        marginRight: 30,
    },
    selected: {
        borderWidth: 2,
        borderColor: "#6dc474",
        borderStyle: "solid"
    }
});