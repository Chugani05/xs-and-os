import React from "react";
import { TouchableOpacity, Text} from "react-native";
import { Styles } from '../styles/GlobalStyles';

interface ButtonProp {
    title: string;
    onPress:() => void;
}

export default function Button({title, onPress}: ButtonProp) {
    return (
        <TouchableOpacity style={Styles.button} onPress={onPress}>
            <Text style={Styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}