import React, { ReactNode } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { getLabels } from '../utils/i18n';
import Title from './Title';
import { Address, Contacts as ContactsProps } from '@resume-creator/types';

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
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

const formatAddress = (
  address?: Address, 
  full?: boolean
): string | undefined => {
  return full 
    ? `${address?.street} ${address?.number}, ${address?.postalCode}, ${address?.city}, ${address?.country}` 
    : address?.city;
}

type ContactProps = {
  type: string,
  children: ReactNode;
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

//TODO before implementing preference to show full address
// make sure to fix contact style to avoid text overflow
const Contacts = ({
  phone,
  email,
  address
}: ContactsProps) => {
  const labels = getLabels();
  //TODO make configurable (fix style on full)
  const showFullAddress = false;
  const addressLabel = showFullAddress 
    ? labels.contacts.address 
    : labels.contacts.city;
  const formattedAddress = formatAddress(address, showFullAddress);
  const hasContacts = phone || email || address;
  return !hasContacts ? null : (
    <View style={styles.container}>
      <Title>{labels.contacts.title}</Title>
      <Contact type={labels.contacts.phone} >{phone}</Contact>
      <Contact type={labels.contacts.email} >{email}</Contact>
      <Contact type={addressLabel} >{formattedAddress}</Contact>
    </View>
  );
};

export default Contacts;
