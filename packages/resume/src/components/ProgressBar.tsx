import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import theme from '../resources/theme.json';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#CCCCCC",
    height: 5,
    borderRadius: 3
  },
  progress: {
    backgroundColor: theme.secondaryColor,
    height: 5,
    borderRadius: 3
  },
});

type ProgressBarProps = {
  progress?: number
};

const inRange = (
  value: number,
  lower: number,
  upper: number
): number => {
  if (!value || value < lower) {
    return lower;
  } else if (value > upper) {
    return upper;
  } else {
    return value;
  }
};

const getWidth = (progress: number): string => {
  return `${inRange(progress, 0, 100)}%`;
};

const ProgressBar = ({
  progress
}: ProgressBarProps) => {
  return (progress === undefined) ? null : (
    <View style={styles.container}>
      <View style={{ ...styles.progress, width: getWidth(progress) }} />
    </View>
  );
};

export default ProgressBar;
