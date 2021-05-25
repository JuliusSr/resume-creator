import * as React from 'react';
import {
  Text,
  Font,
  View,
  StyleSheet,
} from '@react-pdf/renderer';
import { Resume as ResumeProps } from '@resume-creator/types';

const styles = StyleSheet.create({
  resume: {
    padding: 30,
    fontFamily: "Lato",
    alignItems: "center",
  },
});

Font.register({
  "family": "Lato",
  "src": "https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf"
});

const Resume = (props: ResumeProps) => {
  const {
    image,
    personalData,
    education,
    experience,
    languages
  } = props;
  return (
    <View style={styles.resume} >
      {personalData 
        ? <Text>Hello {personalData.name}!</Text> 
        : <Text>Hello World!</Text>
      }
    </View>
  );
};

export default Resume;
