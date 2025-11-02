import React, { useState } from "react";
import { View, TextInput, Text, Button, StyleSheet } from "react-native";
import { Styles } from "../styles/GlobalStyles";

interface Props {
  onApplySize: (size: number) => void;
}

export default function BoardSizeSelector({ onApplySize }: Props) {
  const [size, setSize] = useState<string>("3");
  const [error, setError] = useState<string>("");

  function handleChangeSize(value: string) {
    setSize(value);
    if (value === "") {
      setError("");
      return;
    }
    if (!/^\d+$/.test(value)) {
      setError("Only numbers allowed");
      return;
    }
    const parsed = parseInt(value, 10);
    if (parsed < 3 || parsed > 7) {
      setError("Only number bettwen 3 and 7");
    } else {
      setError("");
    }
  }

  function applySize() {
    const parsed = parseInt(size, 10);
    if (isNaN(parsed) || parsed < 3 || parsed > 7) {
      setError("Enter a valid size (bettwen 3 and 7)");
      return;
    }
    setError("");
    onApplySize(parsed);
  }

  return (
    <View>
      <Text style={Styles.statusText}>Choose a board size (bettwen 3 and 7):</Text>

      <TextInput
            style={[styles.placeholderText, error ? styles.inputError : null]}
            keyboardType="numeric"
            value={size}
            onChangeText={handleChangeSize}
            placeholder="Number"
            maxLength={1}
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <View style={Styles.button}>
            <Button title="Apply size" onPress={applySize}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  placeholderText: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    width: 100,
    padding: 8,
    textAlign: "center",
    fontSize: 18,
  },
  inputError: { borderColor: "red" },
  error: { color: "red", marginTop: 4 },
});
