import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    paddingBottom: 3,
  },
  detailColumn: {
    flexDirection: 'column',
    textTransform: 'uppercase'
  },
  name: {
    fontFamily: 'Lato Bold',
    fontSize: 24,
  },
  subtitle: {
    fontFamily: 'Lato',
    fontSize: 14,
  },
});

type HeaderProps = {
  name: string,
  role?: string,
};

const Header = ({ 
  name, 
  role
}: HeaderProps) => (
  <View style={styles.container}>
    <View style={styles.detailColumn}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.subtitle}>{role}</Text>
    </View>
  </View>
);

export default Header;
