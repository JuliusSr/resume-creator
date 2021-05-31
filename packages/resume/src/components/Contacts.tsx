import React, { ReactNode } from 'react';
import { Link, Text, View, StyleSheet } from '@react-pdf/renderer';
import { getLabels } from '../utils/i18n';
import Title from './Title';
import { Address, Contacts as ContactsData, LinkContact as LinkData } from '@resume-creator/types';
import { PhoneIcon, EmailIcon, WebIcon, PositionIcon } from './Icons';

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    fontSize: 10,
  },
  contact: {
    flexDirection: "row",
    marginBottom: 1
  },
  contactWithIcon: {
    flexDirection: "row",
    marginBottom: 5,
    alignItems: "center"
  },
  type: {
    fontFamily: 'Lato Bold',
    marginRight: 2
  },
  icon: {
    marginRight: 5
  }
});

//FIXME modify contact style to fix incorrect text wrapping when full address
//      is displayed (long string, small container).
//      Once fixed, remove \n from formatted address.
const formatAddress = (
  address?: Address, 
  full?: boolean
): string | undefined => {
  return full 
    ? `${address?.street} ${address?.number}, \n${address?.postalCode}, ${address?.city}, \n${address?.country}` 
    : address?.city;
}

type ContactProps = {
  type: string,
  children: string
};

const Contact = ({
  type,
  children
}: ContactProps) => {
  return !children ? null : (
    <View style={styles.contact}>
      <Text style={styles.type}>{type}:</Text>
      <Text>{children}</Text>
    </View>
  );
}

interface LinkContactProps extends ContactProps {
  link?: string
}

const LinkContact = ({
  type,
  link,
  children
}: LinkContactProps) => {
  const href = link || children;
  return !children ? null : (
    <View style={styles.contact}>
      <Text style={styles.type}>{type}:</Text>
      <Link src={href}>{children}</Link>
    </View>
  );
}

type ContactWithIconProps = {
  icon: typeof React.Component | React.FC<any>
  children: string;
};

const ContactWithIcon = ({
  icon,
  children
}: ContactWithIconProps) => {
  const Icon = icon;
  return !children ? null : (
    <View style={styles.contactWithIcon}>
      <Icon style={styles.icon} />
      <Text>{children}</Text>
    </View>
  );
}

interface LinkContactWithIconProps extends ContactWithIconProps {
  link?: string
}

const LinkContactWithIcon = ({
  icon,
  link,
  children
}: LinkContactWithIconProps) => {
  const href = link || children;
  const Icon = icon;
  return !children ? null : (
    <View style={styles.contactWithIcon}>
      <Icon style={styles.icon} />
      <Link src={href}>{children}</Link>
    </View>
  );
}

type InstanceContactProps = {
  icon?: boolean
}

interface PhoneContactProps extends InstanceContactProps {
  phone?: string;
}

const PhoneContact = ({
  phone,
  icon,
}: PhoneContactProps) => {
  const labels = getLabels();
  return !phone ? null : (
    icon 
    ? <ContactWithIcon icon={PhoneIcon}>{phone}</ContactWithIcon> 
    : <Contact type={labels.contacts.phone}>{phone}</Contact>
  );
}

interface EmailContactProps extends InstanceContactProps {
  email?: string;
}

const EmailContact = ({
  email,
  icon,
}: EmailContactProps) => {
  const labels = getLabels();
  const mailto = `mailto:${email}`;
  return !email ? null : (
    icon 
    ? <LinkContactWithIcon icon={EmailIcon} link={mailto}>{email}</LinkContactWithIcon> 
    : <LinkContact type={labels.contacts.email} link={mailto}>{email}</LinkContact>
  );
}

interface WebContactProps extends InstanceContactProps {
  website?: LinkData;
}

const WebContact = ({
  website,
  icon,
}: WebContactProps) => {
  const labels = getLabels();
  const link = website?.link || website?.text
  return !website?.text ? null : (
    icon 
    ? <LinkContactWithIcon icon={WebIcon} link={link}>{website.text}</LinkContactWithIcon> 
    : <LinkContact type={labels.contacts.website} link={link}>{website.text}</LinkContact>
  );
}

interface AddressContactProps extends InstanceContactProps {
  address?: Address;
  full?: boolean
}

const AddressContact = ({
  address,
  icon,
  full,
}: AddressContactProps) => {
  const labels = getLabels();
  const addressLabel = full 
    ? labels.contacts.address 
    : labels.contacts.city;
  const formattedAddress = formatAddress(address, full);
  return !formattedAddress ? null : (
    icon 
    ? <ContactWithIcon icon={PositionIcon}>{formattedAddress}</ContactWithIcon> 
    : <Contact type={addressLabel}>{formattedAddress}</Contact>
  );
}

interface ContactsProps extends ContactsData {
  icons?: boolean,
  fullAddress?: boolean,
}

const Contacts = ({
  phone,
  email,
  website,
  address,
  icons,
  fullAddress
}: ContactsProps) => {
  const labels = getLabels();
  const hasContacts = phone || email || address;
  return !hasContacts ? null : (
    <View style={styles.container}>
      <Title>{labels.contacts.title}</Title>
      <PhoneContact phone={phone} icon={icons} />
      <EmailContact email={email} icon={icons} />
      <WebContact website={website} icon={icons} />
      <AddressContact address={address} icon={icons} full={fullAddress} />
    </View>
  );
};

export default Contacts;
