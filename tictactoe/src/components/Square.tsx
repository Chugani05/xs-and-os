import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";

type Props = {
  value: string | null;
  onSquareClick: () => void;
  highlight: boolean;
  size?: number;
};

export default function Square({ value, onSquareClick, highlight, size = 90, }: Props) {
  return (
    <TouchableOpacity
      style={[
        Styles.square,
        { width: size, height: size },
        highlight && Styles.squareHighlight,
      ]}
      onPress={onSquareClick}
    >
      <Text style={Styles.squareText}>{value}</Text>
    </TouchableOpacity>
  );
}
