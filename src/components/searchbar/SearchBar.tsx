import {StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native";

export default function SearchBar(){
    const [inputValue, setInputValue] = useState('');

    return (
        <View style={styles.inputPesquisa}>
            {/* Aqui eu estou criando um input e pegando o valor dele */}
            <TextInput value={inputValue} placeholder="Pesquisa" onChangeText={text => setInputValue(text)} ></TextInput>
            <Text>Icone</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    inputPesquisa: {
        color: 'tomato',
        display:"flex",
        flexDirection: "row",
        justifyContent: "space-between",
        fontSize: 16,
        borderRadius: 45,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingVertical: 6,
        paddingHorizontal: 15,
        backgroundColor: "#aee637",
        alignItems:"center"
    }
   
})