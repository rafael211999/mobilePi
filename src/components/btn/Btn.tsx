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
        flex: 1,
        backgroundColor: "red",
        marginHorizontal: 80,
        marginVertical: 15,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 25,
        alignItems: "center",
        justifyContent:"center",
    },
})