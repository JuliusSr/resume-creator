import React, { ReactNode } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { getLabels } from '../utils/i18n';
import Title from './Title';
import ProgressBar from './ProgressBar';
import { Language as LanguageData } from '@resume-creator/types';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  language: {
    fontSize: 10,
    marginBottom: 5,
  },
  languageName: {
    marginBottom: 3
  }
});

type LanguageProp = {
  children: ReactNode,
  level?: number,
}

const Language = ({
  level,
  children
}: LanguageProp) => {
  return (
    <View style={styles.language}>
      <Text style={styles.languageName}>{children}</Text>
      <ProgressBar progress={level} />
    </View>
  );
}

type LanguagesProps = {
  languages?: Array<LanguageData>
}

const Languages = ({
  languages
}: LanguagesProps) => {
  const labels = getLabels();
  return !languages ? null : (
    <View style={styles.container}>
      <Title>{labels.languages.title}</Title>
      {languages.map((language, i) => 
        <Language key={i} level={language.level}>
          {language.name}
        </Language>
      )}
    </View>
  );
}

export default Languages;
