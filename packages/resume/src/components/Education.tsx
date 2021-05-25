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
const Education = () => {
  const labels = getLabels();
  return (
    <View style={styles.container}>
      <Text>{labels.education.title}</Text>
    </View>
  );
}

export default Education;
