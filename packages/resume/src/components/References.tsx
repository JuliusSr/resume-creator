import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Title from './Title';
import { getLabels } from '../utils/i18n';
import { Reference as ReferenceData } from '@resume-creator/types';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  reference: {
    marginBottom: 10
  },
  referenceTitle: {
    fontSize: 11,
    fontFamily: "Lato Bold"
  },
  contact: {
    fontSize: 10,
    marginTop: 1,
  }
});

type ReferenceProps = {
  name: string,
  company: string,
  email?: string,
  phone?: string
}

const Reference = ({
  name,
  company,
  email,
  phone
}: ReferenceProps) => {
  const title = `${name}  |  ${company}`;
  return (
    <View style={styles.reference}>
      <Text style={styles.referenceTitle}>{title}</Text>
      <Text style={styles.contact}>{email}</Text>
      <Text style={styles.contact}>{phone}</Text>
    </View>
  );
}

type ReferencesProps = {
  references?: Array<ReferenceData>
}

const References = ({ 
  references, 
}: ReferencesProps) => {
  const labels = getLabels();
  return !references ? null : (
    <View style={styles.container}>
      <Title>{labels.references.title}</Title>
      {references.map(({ name, company, email, phone }) => 
        <Reference
          name={name}
          company={company}
          email={email}
          phone={phone}
        />  
      )}
    </View>
  );
}

export default References;
