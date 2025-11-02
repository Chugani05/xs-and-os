import React from 'react';
import { View, Text } from 'react-native';
import Square from './Square';
import { calculateWinner } from '../utils/calculateWinner';
import { Styles } from '../styles/GlobalStyles';

type Props = {
  size: number;
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (squares: (string | null)[]) => void;
};

export default function Board({ size, xIsNext, squares, onPlay }: Props) {
  const result = calculateWinner(squares, size);
  const winner = result ? result.winner : null;
  const winningLine = result ? result.line : [];

  function handleClick(i: number) {
    if (winner || squares[i]) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const status = winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? 'Tie'
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <View style={Styles.boardContainer}>
      <Text style={Styles.statusText}>{status}</Text>
      {Array.from({ length: size }).map((_, row) => (
        <View key={row} style={Styles.boardRow}>
          {Array.from({ length: size }).map((_, col) => {
            const index = row * size + col;
            return (
              <Square
                key={index}
                value={squares[index]}
                onSquareClick={() => handleClick(index)}
                highlight={winningLine.includes(index)}
              />
            );
          })}
        </View>
      ))}
    </View>
  );
}
