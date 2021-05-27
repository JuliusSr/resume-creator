import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { getLabels } from '../utils/i18n';
import Title from './Title';
import List from './List';

const styles = StyleSheet.create({
  container: {},
  entry: {
    marginBottom: 10,
    marginRight: 15,
  },
  name: {
    fontFamily: 'Lato Bold',
    fontSize: 11,
    marginBottom: 10,
  }
});

type SkillEntryProps = {
  name: string,
  skills: Array<string>
}

const SkillEntry = ({ 
  name, 
  skills 
}: SkillEntryProps) => (
  <View style={styles.entry} >
    <Text style={styles.name}>{name}</Text>
    <List items={skills} />
  </View>
);

type SkillData = {
  name: string,
  details: Array<string>
}

type SkillsProps = {
  skills?: Array<SkillData>
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
        />
      )}
    </View>
  );
}

export default Skills;
