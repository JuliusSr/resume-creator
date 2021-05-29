import * as React from 'react';
import { Font, View, StyleSheet } from '@react-pdf/renderer';
import { Resume as ResumeProps } from '@resume-creator/types';
import fonts from '../resources/fonts.json';
import theme from '../resources/theme.json';
import Header from './Header';
import Contacts from './Contacts';
import Languages from './Languages';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Profile from './Profile';
import Picture from './Picture';
import References from './References';

const styles = StyleSheet.create({
  resume: {
    flexDirection: "row",
    height: "100%",
    fontFamily: "Lato",
  },
  leftColumn: {
    flexDirection: "column",
    width: 185,
    paddingTop: 20,
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 30,
    backgroundColor: theme.mainColor,
  },
  rightColumn: {
    flexDirection: "column",
    width: 430,
    margin: 15,
  },
  mainContent: {
    marginTop: 30,
    fontSize: 12,
  },
});

fonts.forEach(font => Font.register(font));

const Resume = (props: ResumeProps) => {
  const {
    picture,
    personalData,
    education,
    experience,
    languages,
    skills,
    profile,
    references,
  } = props;
  return (
    <View style={styles.resume} >
      <View style={styles.leftColumn} >
        <Picture src={picture} round />
        <Contacts {...personalData?.contacts} icons />
        <Skills skills={skills} />
        <Languages languages={languages} />
      </View>
      <View style={styles.rightColumn} >
        {personalData &&
          <Header 
            name={personalData.name} 
            role={personalData.role}
          />
        }
        <View style={styles.mainContent}>
          <Profile>{profile}</Profile>
          <Experience history={experience} />
          <Education history={education} />
          <References references={references} />
        </View>
      </View>
    </View>
  );
};

export default Resume;
