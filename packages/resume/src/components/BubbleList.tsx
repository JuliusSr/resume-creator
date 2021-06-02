import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { Style } from '@react-pdf/types';

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  bubble: {
    margin: 1,
    paddingLeft: 5,
    paddingRight: 4,
    paddingTop: 1.5,
    paddingBottom: 1,
    border: 1,
    borderRadius: 100,
    fontSize: 10
  }
});

type BubbleTheme = {
  textColor?: string,
  bubbleColor?: string
}

type BubbleListProps = {
  items?: Array<string>,
  style?: Style,
  bubbleTheme?: BubbleTheme,
  solid?: boolean
}

const BubbleList = ({
  items,
  style,
  bubbleTheme,
  solid
}: BubbleListProps) => {
  const bubbleColor = bubbleTheme?.bubbleColor || "#666666";
  const textColor = bubbleTheme?.textColor || "#333333";
  const bubbleColors: Style = {
    borderColor: bubbleColor,
    color: textColor,
    ...(solid ? { backgroundColor: bubbleColor } : {})
  }
  return (!items || items.length === 0) ? null : (
    <View style={[styles.container, {...style}]}>
      {items.map((item, i) => 
        <Text key={i} style={[styles.bubble, {...bubbleColors}]}>
          {item}
        </Text>
      )}
    </View>
  );
}

export default BubbleList;
