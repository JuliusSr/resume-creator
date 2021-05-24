import React from 'react';
import {
  Text,
  Font,
  Page,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  resume: {
    padding: 30,
    fontFamily: "Lato"
  },
});

Font.register({
  "family": "Lato",
  "src": "https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf"
});

const Resume = () => (
  <View style={styles.resume} >
    <Text>Hello World!</Text>
  </View>
);

export default () => (
  <Document title="Resume" >
    <Page size="A4" >
      <Resume />
    </Page>
  </Document>
);
