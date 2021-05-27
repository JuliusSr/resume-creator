import React, { ReactNode } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  item: {
    flexDirection: "row",
    marginBottom: 5,
  },
  bullet: {
    fontSize: 10,
    marginRight: 5,
  },
  content: {
    fontSize: 10,
  }
});

type ItemProps = {
  children: ReactNode
}

const Item = ({
  children
}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.bullet}>•</Text>
    <Text style={styles.content}>{children}</Text>
  </View>
);

type ListProps = {
  items: Array<string>
}

const List = ({
  items
}: ListProps) => {
  return (
    <View style={styles.container}>
      {items.map(item => <Item>{item}</Item>)}
    </View>
  );
}

export default List;
