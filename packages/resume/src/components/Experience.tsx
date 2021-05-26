import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { getLabels } from '../utils/i18n';
import Title from './Title';
import { Experience as ExperienceData } from '@resume-creator/types';
import List from './List';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  history: {
    flexDirection: "column"
  },
  entry: {
    marginBottom: 10
  },
  title: {
    fontSize: 11,
    fontFamily: 'Lato Bold',
  },
  date: {
    fontSize: 11,
    fontFamily: 'Lato Italic',
  },
  details: {
    marginTop: 10,
    marginLeft: 1,
  }
});

type ExperienceEntryProps = {
  company: string,
  position: string,
  details: Array<string>,
  dateFrom: string,
  dateTo?: string
}

const ExperienceEntry = ({
  company,
  position,
  details,
  dateFrom,
  dateTo
}: ExperienceEntryProps) => {
  const labels = getLabels();
  const title = `${position}  |  ${company}`;
  return (
    <View style={styles.entry}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>
        {dateFrom} - {dateTo || labels.experience.present}
      </Text>
      <View style={styles.details}>
        <List items={details} />
      </View>
    </View>
  );
}

type ExperienceProps = {
  history?: Array<ExperienceData>
}

const Experience = ({
  history
}: ExperienceProps) => {
  const labels = getLabels();
  return !history ? null : (
    <View style={styles.container}>
      <Title>{labels.experience.title}</Title>
      <View style={styles.history}>
        {history.map(({ company, position, details, dateFrom, dateTo })=> 
          <ExperienceEntry
            company={company}
            position={position}
            details={details}
            dateFrom={dateFrom}
            dateTo={dateTo}
          />
        )}
      </View>
    </View>
  );
}

export default Experience;
