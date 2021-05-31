import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { getLabels } from '../utils/i18n';
import Title from './Title';
import List from './List';
import { Skill } from '@resume-creator/types';
import ProgressBar from './ProgressBar';
import BubbleList from './BubbleList';
import theme from '../resources/theme.json';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
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
  details: {
    marginTop: 5,
    marginRight: 15,
  },
  points: {
    marginTop: 5
  },
  point: {
    fontFamily: 'Lato Bold',
    color: theme.secondaryContrastColor,
    borderColor: theme.secondaryColor,
    backgroundColor: theme.secondaryColor,
  }
});

type SkillEntryProps = {
  name: string,
  details?: Array<string>,
  level?: number,
  points?: Array<string>
}

const SkillEntry = ({ 
  name, 
  details,
  level,
  points
}: SkillEntryProps) => {
  const entryStyle = (details) 
    ? styles.entry 
    : styles.entryNoDetails;
  return (
    <View style={entryStyle} >
      <Text style={styles.name}>{name}</Text>
      {(level !== undefined) && 
        <ProgressBar style={styles.level} progress={level} />
      }
      {points && 
        <BubbleList 
          style={styles.points} 
          items={points} 
          bubbleTheme={{
            bubbleColor: theme.secondaryColor,
            textColor: theme.secondaryContrastColor
          }}
          solid
        />
      }
      {details && <List style={styles.details} items={details} />}
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
          details={skill.details}
          level={skill.level}
          points={skill.points}
        />
      )}
    </View>
  );
}

export default Skills;
