import React from "react";
import {StyleSheet, Text, TouchableOpacity, View } from "react-native";


// Aqui eu estou criando um botão para poder ser utilizado no meu sistema.
export default function Btn(){
    return(
        <View>
            <TouchableOpacity style={styles.btnText}>
                <Text>
                    Botão teste
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles =  StyleSheet.create({
    btnText: {
        display:"flex",
        backgroundColor: "red",
        padding: 25,
        margin: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 25,
        alignItems: "center",
        justifyContent:"center",
    },
})