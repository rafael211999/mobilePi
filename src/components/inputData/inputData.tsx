import {StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native";

export default function InputData() {
    const [inputValue, setInputValue] = useState('');

    return (
        <View  style = {styles.setText}>
            
            {/* Aqui eu estou criando um input e pegando o valor dele */}
            <TextInput value={inputValue} placeholder="Pesquisar" onChangeText={text => setInputValue(text)}></TextInput>
            {/* Aqui eu estou imprimindo na tela o valor que está sendo digitado no meu input */}
            {/* <Text>{inputValue}</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    setText: {
        fontSize: 16,
        backgroudColor: 'black',
        elevation: 1,
        borderRadius: 45,
        marginVertical: 10,
        paddingVertical: 6,
        paddingHorizontal: 15,
    },

    text:{
        fontSize: 20,
    }
})