import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Styles } from '../styles/GlobalStyles';

type Props = {
  value: string | null;
  onSquareClick: () => void;
  highlight: boolean;
};

export default function Square({ value, onSquareClick, highlight }: Props) {
  return (
    <TouchableOpacity
      style={[Styles.square, highlight && Styles.squareHighlight]}
      onPress={onSquareClick}
    >
      <Text style={Styles.squareText}>{value}</Text>
    </TouchableOpacity>
  );
}
