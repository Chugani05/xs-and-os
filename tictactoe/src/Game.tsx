import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Board from './components/Board';
import { Styles } from './styles/GlobalStyles';
import ResetButton from './components/ResetButton';
import HistoryButton from './components/HistoryButton';
import Scoreboard from './components/ScoreBoard';
import { calculateWinner } from './utils/calculateWinner';

export default function Game() {
  const [size, setSize] = useState(3);
  const [history, setHistory] = useState([Array(size * size).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: (string | null)[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);

    const result = calculateWinner(nextSquares, size);
    if (result?.winner) {
      if (result.winner === 'X') setScoreX(scoreX + 1);
      else setScoreO(scoreO + 1);
    }
  }

  function jumpTo(move: number) {
    setCurrentMove(move);
    setIsDropdownOpen(false);
  }

  function restartGame(forceWin?: 'X' | 'O') {
    if (forceWin) {
      if (forceWin === 'X') setScoreX(scoreX + 1);
      else setScoreO(scoreO + 1);
    }
    setHistory([Array(size * size).fill(null)]);
    setCurrentMove(0);
  }

  function resetStats() {
    setScoreX(0);
    setScoreO(0);
  }

  const moves = history.map((squares, move) => ({
    key: move.toString(),
    label: move ? `Go to move #${move}` : 'Go to start',
  }
));
  

  return (
    <View style={Styles.gameContainer}>
      <View style={Styles.boardSection}>
        <Scoreboard scoreX={scoreX} scoreO={scoreO} onResetStats={resetStats} />
        <Board size={size} xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        
        <View style={Styles.controlsContainer}>
          <ResetButton title='Restart Game' onPress={restartGame}></ResetButton>
          
          <View style={Styles.dropdownWrapper}>
            <HistoryButton title='Moves ▴' onPress={() => setIsDropdownOpen(!isDropdownOpen)}></HistoryButton>
              {isDropdownOpen && (
                <View style={Styles.dropdownList}>
                  <FlatList
                    data={moves}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item, index }) => (
                      <TouchableOpacity style={Styles.dropdownItem} onPress={() => jumpTo(index)}>
                        <Text style={Styles.dropdownItemText}>{item.label}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              )}
          </View>

        </View>
      </View>
      
    </View>
  );
}
