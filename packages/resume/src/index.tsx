import * as React from 'react';
import {
  Page,
  Document,
} from '@react-pdf/renderer';
import { Resume as ResumeProps } from '@resume-creator/types';
import Resume from './Resume';

const ResumeDocument = (props: ResumeProps) => (
  <Document title="Resume" >
    <Page size="A4" >
      <Resume { ...props } />
    </Page>
  </Document>
);

export default ResumeDocument;
