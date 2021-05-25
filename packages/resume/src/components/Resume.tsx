import * as React from 'react';
import {
  Font,
  View,
  Image,
  StyleSheet,
} from '@react-pdf/renderer';
import { Resume as ResumeProps } from '@resume-creator/types';
import fonts from '../resources/fonts.json';
import theme from '../resources/theme.json';
import Header from './Header';
import Contacts from './Contacts';
import Languages from './Languages';
import Experience from './Experience';
import Education from './Education';

const styles = StyleSheet.create({
  resume: {
    flexDirection: "row",
    height: "100%",
    fontFamily: "Lato",
  },
  leftColumn: {
    flexDirection: "column",
    width: 170,
    paddingTop: 20,
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 30,
    backgroundColor: theme.mainColor,
  },
  image: {
    borderRadius: 100,
    marginBottom: 20
  },
  rightColumn: {
    flexDirection: "column",
    width: 430,
    margin: 15,
  },
  header: {
    border: 2,
  },
  mainContent: {
    marginTop: 15,
    fontSize: 12,
  },
});

fonts.forEach(font => Font.register(font));

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
      <View style={styles.leftColumn} >
        {image && 
          <Image
            style={styles.image}
            src={image}
          />
        }
        <Contacts {...personalData?.contacts} />
        <Languages />
      </View>
      <View style={styles.rightColumn} >
        {personalData &&
          <Header 
            name={personalData.name} 
            role={personalData.role}
          />
        }
        <View style={styles.mainContent}>
          <Experience />
          <Education />
        </View>
      </View>
    </View>
  );
};

export default Resume;
