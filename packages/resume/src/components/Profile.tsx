import React, { ReactNode } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Title from './Title';
import { getLabels } from '../utils/i18n';
import WithSidebar from './WithSidebar';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  content: {
    fontSize: 10,
    marginRight: 30,
  },
});

type ProfileProps = {
  children?: ReactNode,
  sidebar?: boolean,
}

const Profile = ({ 
  children, 
  sidebar
}: ProfileProps) => {
  const labels = getLabels();
  return !children ? null : (
    <View style={styles.container}>
      <Title>{labels.profile.title}</Title>
      <WithSidebar active={sidebar}>
        <Text style={styles.content}>{children}</Text>
      </WithSidebar>
    </View>
  );
}

export default Profile;
