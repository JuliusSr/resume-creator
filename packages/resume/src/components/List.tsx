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
    width: 4,
    height: 4,
    borderRadius: 100,
    backgroundColor: "#000000",
    marginRight: 5,
    marginTop: 5
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
    <View style={styles.bullet} />
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
