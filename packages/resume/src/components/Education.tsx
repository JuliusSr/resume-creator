import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { getLabels } from '../utils/i18n';
import { Date, Education as EducationData } from '@resume-creator/types';
import Title from './Title';
import DateInterval from './DateInterval';
import WithSidebar from './WithSidebar';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  entry: {
    marginBottom: 10
  },
  institute: {
    fontFamily: 'Lato Bold',
    fontSize: 11,
    marginBottom: 1,
  },
  degree: {
    fontSize: 11,
    marginBottom: 2,
  }
});

type EducationEntryProps = {
  institute: string,
  degree: string,
  dateFrom: Date,
  dateTo?: Date,
  sidebar?: boolean
}

const EducationEntry = ({
  institute,
  degree,
  dateFrom,
  dateTo,
  sidebar
}: EducationEntryProps) => (
  <WithSidebar active={sidebar} style={styles.entry}>
    <Text style={styles.institute}>{institute}</Text>
    <Text style={styles.degree}>{degree}</Text>
    <DateInterval from={dateFrom} to={dateTo} shortMonth />
  </WithSidebar>
);

type EducationProps = {
  history?: Array<EducationData>,
  sidebar?: boolean
}

const Education = ({
  history,
  sidebar
}: EducationProps) => {
  const labels = getLabels();
  return !history ? null : (
    <View style={styles.container}>
      <Title>{labels.education.title}</Title>
      {history.map(({ institute, degree, dateFrom, dateTo }, i) => 
        <EducationEntry
          key={i}
          institute={institute}
          degree={degree}
          dateFrom={dateFrom}
          dateTo={dateTo}
          sidebar={sidebar}
        />
      )}
    </View>
  );
}

export default Education;
