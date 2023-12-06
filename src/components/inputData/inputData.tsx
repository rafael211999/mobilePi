import {StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native";

export default function InputData() {
    const [inputValue, setInputValue] = useState('');

    return (
        <View>
            <Text>
                Esse é um teste de input
            </Text>
            {/* Aqui eu estou criando um input e pegando o valor dele */}
            <TextInput value={inputValue} onChangeText={text => setInputValue(text)} style = {styles.setText}></TextInput>

            {/* Aqui eu estou imprimindo na tela o valor que está sendo digitado no meu input */}
            <Text>{inputValue}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    setText: {
        fontSize: 16,
        backgroudColor: '#808040',
        elevation: 25,
        borderRadius: 45,
    },

    text:{
        fontSize: 25,
    }
})