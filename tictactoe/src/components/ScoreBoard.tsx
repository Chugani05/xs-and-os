import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Styles } from '../styles/GlobalStyles';

type Props = {
  scoreX: number;
  scoreO: number;
  onResetStats: () => void;
};

export default function Scoreboard({ scoreX, scoreO, onResetStats }: Props) {
  return (
    <View style={Styles.scoreContainer}>
      <Text style={Styles.scoreText}>X Wins: {scoreX}</Text>
      <Text style={Styles.scoreText}>O Wins: {scoreO}</Text>
      <TouchableOpacity style={Styles.resetStatsButton} onPress={onResetStats}>
        <Text style={Styles.buttonText}>Reset Stats</Text>
      </TouchableOpacity>
    </View>
  );
}
