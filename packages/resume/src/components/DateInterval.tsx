import React from 'react';
import { Text, StyleSheet } from '@react-pdf/renderer';
import { getLabels } from '../utils/i18n';
import { Date } from '@resume-creator/types';

const styles = StyleSheet.create({
  date: {
    fontSize: 11,
    fontFamily: 'Lato Italic'
  },
});

const getMonth = (month?: number, short?: boolean): string | undefined => {
  const { months } = getLabels();
  const monthString = month 
    ? months[month-1] 
    : undefined;
  return short
    ? monthString?.substr(0, 3) 
    : monthString;
}

const formatDate = (date: Date, shortMonth?: boolean): string => {
  var month = getMonth(date.month, shortMonth);
  return month 
    ? `${month} ${date.year}`
    : `${date.year}`;
}

type DateIntervalProps = {
  from: Date,
  to?: Date,
  shortMonth?: boolean
}

const DateInterval = ({
  from,
  to,
  shortMonth
}: DateIntervalProps) => {
  const labels = getLabels();
  const dateFrom = formatDate(from, shortMonth);
  const dateTo = to && formatDate(to, shortMonth);
  return (
    <Text style={styles.date}>
      {dateFrom} - {dateTo || labels.experience.present}
    </Text>
  );
}

export default DateInterval;
