import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { getLabels } from '../utils/i18n';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
});

//TODO props
//TODO implement
//TODO conditional rendering
const Experience = () => {
  const labels = getLabels();
  return (
    <View style={styles.container}>
      <Text>{labels.experience.title}</Text>
    </View>
  );
}

export default Experience;
