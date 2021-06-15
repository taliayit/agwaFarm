import React, { useState } from 'react';
import { CheckBox, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import InputSpinner from "react-native-input-spinner";

export default function PlantItem({plant, min, max, onQtyChange}) {
    const [quantity, setQuantity] = useState(plant.quantity);
    const [isSelected, setSelection] = useState(false);

    function handleCheckboxChange(value) {
        if(value === false) { 
            setQuantity(0);
        }
        else {
            setQuantity(1);
        }
        setSelection(value);
    }

    return (
        <View style={styles.container}>
            <CheckBox
                value={isSelected}
                onValueChange={handleCheckboxChange}
                style={styles.checkbox}
            />
            <View style={[styles.itemContainer, isSelected ? styles.selected : ""]}>
                <Image style={styles.image} source={plant.image ? plant.image : "https://can-plant.ca/userContent/images/Page%20Content/Home/ferns-and-allies1.png"} />
                <View style={styles.textWrapper}>
                    <Text style={styles.name}>{plant.name}</Text>
                    <InputSpinner
                        max={max}
                        min={min}
                        onMin={() => setSelection(false)}
                        onIncrease={() => setSelection(true)}
                        width={75}
                        height={30}
                        buttonFontSize={15}
                        arrows={true}
                        buttonStyle={{width:20, height:20}}
                        color={"#fff"}
                        value={quantity}
                        onChange={(num) => {setQuantity(num)}}
                    />
                </View>

                <TouchableOpacity style={styles.infoWrapper} onPress={() => {console.log("info pressed")}}>
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
        justifyContent: "space-around"

    },
    itemContainer: {
        backgroundColor: "#fff",
        marginBottom: 15,
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
        fontWeight:500
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
    checkbox: {
        marginRight: 10
    },
    selected: {
        outlineWidth: 2,
        outlineColor: "rgb(0, 150, 136)",
        outlineStyle: "solid"
    }
});