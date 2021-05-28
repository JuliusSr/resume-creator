import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { getLabels } from '../utils/i18n';
import Title from './Title';
import { Date, Experience as ExperienceData } from '@resume-creator/types';
import List from './List';
import DateInterval from './DateInterval';

const styles = StyleSheet.create({
  container: {},
  history: {
    flexDirection: "column"
  },
  entry: {
    marginBottom: 10
  },
  header: {
    marginBottom: 10,
  },
  title: {
    fontSize: 11,
    fontFamily: 'Lato Bold',
  },
  description: {
    fontSize: 10,
    marginBottom: 10,
    marginRight: 20,
  },
  details: {
    marginLeft: 1,
    marginRight: 30,
  }
});

type ExperienceEntryProps = {
  company: string,
  position: string,
  description?: string,
  details?: Array<string>,
  dateFrom: Date,
  dateTo?: Date
}

const ExperienceEntry = ({
  company,
  position,
  description,
  details,
  dateFrom,
  dateTo
}: ExperienceEntryProps) => {
  const title = `${position}  |  ${company}`;
  return (
    <View style={styles.entry}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <DateInterval from={dateFrom} to={dateTo} shortMonth />
      </View>
      {description && <Text style={styles.description}>{description}</Text>}
      {details &&
        <View style={styles.details}>
          <List items={details} />
        </View>
      }
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
        {history.map(({ company, position, description, details, dateFrom, dateTo })=> 
          <ExperienceEntry
            company={company}
            position={position}
            description={description}
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
