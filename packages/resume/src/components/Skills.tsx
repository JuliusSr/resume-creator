import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { getLabels } from '../utils/i18n';
import Title from './Title';
import List from './List';
import { Skill } from '@resume-creator/types';
import ProgressBar from './ProgressBar';

const styles = StyleSheet.create({
  container: {
    marginBottom:10
  },
  entry: {
    marginBottom: 5,
  },
  entryNoDetails: {
    marginBottom: 10,
  },
  name: {
    fontFamily: 'Lato Bold',
    fontSize: 11,
  },
  level: {
    marginTop: 3
  },
  list: {
    marginTop: 5,
    marginRight: 15,
  },
});

type SkillEntryProps = {
  name: string,
  skills?: Array<string>,
  level?: number
}

const SkillEntry = ({ 
  name, 
  skills,
  level
}: SkillEntryProps) => {
  const entryStyle = (skills) 
    ? styles.entry 
    : styles.entryNoDetails;
  return (
    <View style={entryStyle} >
      <Text style={styles.name}>{name}</Text>
      {(level !== undefined) && <ProgressBar style={styles.level} progress={level} />}
      {skills && <List style={styles.list} items={skills} />}
    </View>
  );
}

type SkillsProps = {
  skills?: Array<Skill>
}

const Skills = ({ 
  skills 
}: SkillsProps) => {
  const labels = getLabels();
  return !skills ? null : (
    <View style={styles.container}>
      <Title>{labels.skills.title}</Title>
      {skills.map(skill => 
        <SkillEntry
          name={skill.name}
          skills={skill.details}
          level={skill.level}
        />
      )}
    </View>
  );
}

export default Skills;
