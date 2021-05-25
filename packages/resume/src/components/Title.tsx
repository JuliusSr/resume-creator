import React, { ReactNode } from 'react';
import { Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 14,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
});

type TitleProps = {
  children: ReactNode;
};

const Title = (props: TitleProps) => (
  <Text style={styles.title}>
    {props.children}
  </Text>
);

export default Title;
