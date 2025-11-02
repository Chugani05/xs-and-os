import React from 'react';
import { View, Text } from 'react-native';
import Square from './Square';
import { Styles } from '../styles/GlobalStyles';
import { calculateWinner } from '../utils/calculateWinner';

type Props = {
  xIsNext: boolean, 
  squares: any, 
  onPlay:(squares: any) => void 
}

export default function Board({ xIsNext, squares, onPlay }: Props) {
  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (!squares.includes(null)) {
    status = 'Tie';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <View style={Styles.boardContainer}>
      <Text style={Styles.statusText}>{status}</Text>
      {[0, 3, 6].map((rowStart) => (
        <View key={rowStart} style={Styles.boardRow}>
          <Square value={squares[rowStart]} onSquareClick={() => handleClick(rowStart)} />
          <Square value={squares[rowStart + 1]} onSquareClick={() => handleClick(rowStart + 1)} />
          <Square value={squares[rowStart + 2]} onSquareClick={() => handleClick(rowStart + 2)} />
        </View>
      ))}
    </View>
  );
}
