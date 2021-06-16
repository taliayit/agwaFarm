import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, StyleSheet, Image, Platform, TouchableHighlight } from 'react-native';

export default function Checkbox({size, color, isChecked, onValueChange}) {
    const [checked, setChecked] = useState(isChecked);

    useEffect(() => {
        setChecked(isChecked);
    }, [isChecked]);

    function handleValueChange() {
        setChecked(!checked);
        onValueChange(!checked);
    }

    return (
        <TouchableHighlight
            onPress={handleValueChange} 
            underlayColor="transparent"
            style={{ marginVertical: 30 }}>

            <View style={{
                padding: 2, 
                width: size, 
                height: size, 
                backgroundColor: color,
                borderRadius: 4
                }}>
                {
                    checked ?
                    <View style={styles.selectedUI}>
                        <Image source={require('../assets/images/tick.png')} style={styles.checkboxTickImg} />
                    </View>
                    :
                    <View style={styles.uncheckedCheckbox} />
                }
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    showSelectedButton: {
        padding: 20,
        marginTop: 25,
        alignSelf: 'stretch',
        backgroundColor: '#5D52FF'
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        alignSelf: 'stretch'
    },
    selectedUI: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkboxTickImg: {
        width: '85%',
        height: '85%',
        tintColor: '#fff',
        resizeMode: 'contain'
    },
    uncheckedCheckbox: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 2
    },
});
  