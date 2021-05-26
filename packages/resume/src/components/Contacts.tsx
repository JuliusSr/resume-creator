import React, { ReactNode } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { getLabels } from '../utils/i18n';
import Title from './Title';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    fontSize: 10,
  },
  contact: {
    flexDirection: "row",
    marginBottom: 1
  },
  type: {
    fontFamily: 'Lato Bold'
  },
});

type ContactProps = {
  type: string,
  children: ReactNode;
};

type ContactsProps = {
  email?: string,
  phone?: string,
  address?: string,
};

const Contact = ({
  type,
  children
}: ContactProps) => {
  return !children ? null : (
    <View style={styles.contact}>
      <Text style={styles.type}>{type}: </Text>
      <Text>{children}</Text>
    </View>
  );
}

const Contacts = ({
  phone,
  email,
  address
}: ContactsProps) => {
  const labels = getLabels();
  const hasContacts = phone || email || address;
  return !hasContacts ? null : (
    <View style={styles.container}>
      <Title>{labels.contacts.title}</Title>
      <Contact type={labels.contacts.phone} >{phone}</Contact>
      <Contact type={labels.contacts.email} >{email}</Contact>
      <Contact type={labels.contacts.address} >{address}</Contact>
    </View>
  );
};

export default Contacts;
