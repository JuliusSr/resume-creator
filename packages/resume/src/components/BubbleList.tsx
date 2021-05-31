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
    borderColor: "#666666",
    color: "#333333",
    fontSize: 10
  }
});

type BubbleListProps = {
  items?: Array<string>,
  style?: Style,
  itemStyle?: Style
}

const BubbleList = ({
  items,
  style,
  itemStyle,
}: BubbleListProps) => {
  return (!items || items.length === 0) ? null : (
    <View style={[styles.container, {...style}]}>
      {items.map(item => 
        <Text style={[styles.bubble, {...itemStyle}]}>
          {item}
        </Text>
      )}
    </View>
  );
}

export default BubbleList;
