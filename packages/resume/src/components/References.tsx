import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Title from './Title';
import { getLabels } from '../utils/i18n';
import { Reference as ReferenceData } from '@resume-creator/types';
import WithSidebar from './WithSidebar';

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
  phone?: string,
  sidebar?: boolean,
}

const Reference = ({
  name,
  company,
  email,
  phone,
  sidebar
}: ReferenceProps) => {
  const title = `${name}  |  ${company}`;
  return (
    <WithSidebar active={sidebar} style={styles.reference}>
      <Text style={styles.referenceTitle}>{title}</Text>
      <Text style={styles.contact}>{email}</Text>
      <Text style={styles.contact}>{phone}</Text>
    </WithSidebar>
  );
}

type ReferencesProps = {
  references?: Array<ReferenceData>,
  sidebar?: boolean,
}

const References = ({ 
  references, 
  sidebar
}: ReferencesProps) => {
  const labels = getLabels();
  return !references ? null : (
    <View style={styles.container}>
      <Title>{labels.references.title}</Title>
      {references.map(({ name, company, email, phone }, i) => 
        <Reference
          key={i}
          name={name}
          company={company}
          email={email}
          phone={phone}
          sidebar={sidebar}
        />  
      )}
    </View>
  );
}

export default References;
