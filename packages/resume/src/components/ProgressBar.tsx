import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import { Style } from '@react-pdf/types';
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
  progress?: number,
  style?: Style
};

const inRange = (
  value: number,
  lower: number,
  upper: number
): number => {
  if (value === undefined || value < lower) {
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
  progress,
  style
}: ProgressBarProps) => {
  return (progress === undefined) ? null : (
    <View style={[styles.container, {...style}]}>
      <View style={{ ...styles.progress, width: getWidth(progress) }} />
    </View>
  );
};

export default ProgressBar;
