import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { getLabels } from '../utils/i18n';
import Title from './Title';
import { Date, Experience as ExperienceData } from '@resume-creator/types';
import List from './List';
import DateInterval from './DateInterval';
import WithSidebar from './WithSidebar';

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
  role: string,
  description?: string,
  details?: Array<string>,
  dateFrom: Date,
  dateTo?: Date,
  projects?: Array<ExperienceData>,
  sidebar?: boolean,
}

const ExperienceEntry = ({
  company,
  role,
  description,
  details,
  dateFrom,
  dateTo,
  projects,
  sidebar
}: ExperienceEntryProps) => {
  const title = `${role}  |  ${company}`;
  return (
    <WithSidebar active={sidebar} style={styles.entry}>
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
      {projects && projects.map(project =>
        <ExperienceEntry
          company={project.company}
          role={project.role}
          description={project.description}
          details={project.details}
          dateFrom={project.dateFrom}
          dateTo={project.dateTo}
          sidebar
        />
      )}
    </WithSidebar>
  );
}

type ExperienceProps = {
  history?: Array<ExperienceData>,
  sidebar?: boolean,
}

const Experience = ({
  history,
  sidebar
}: ExperienceProps) => {
  const labels = getLabels();
  return !history ? null : (
    <View style={styles.container}>
      <Title>{labels.experience.title}</Title>
      <View style={styles.history}>
        {history.map(job=> 
          <ExperienceEntry
            company={job.company}
            role={job.role}
            description={job.description}
            details={job.details}
            dateFrom={job.dateFrom}
            dateTo={job.dateTo}
            projects={job.projects}
            sidebar={sidebar}
          />
        )}
      </View>
    </View>
  );
}

export default Experience;
