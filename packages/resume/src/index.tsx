import * as React from 'react';
import {
  Page,
  Document,
} from '@react-pdf/renderer';
import { Resume as ResumeProps, Locale } from '@resume-creator/types';
import Resume from './components/Resume';
import { setLocale } from './utils/i18n'

interface ResumeDocumentProps extends ResumeProps {
  locale?: Locale
}

const ResumeDocument = (props: ResumeDocumentProps) => {
  if (props.locale) {
    setLocale(props.locale);
  }
  return (
    <Document title="Resume" >
      <Page size="A4" >
        <Resume { ...props } />
      </Page>
    </Document>
  );
}

export default ResumeDocument;
