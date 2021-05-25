import React from 'react'; 
import { PDFViewer } from '@react-pdf/renderer';
import Resume from '@resume-creator/resume';
import { Resume as ResumeData, Locale } from '@resume-creator/types';

type ResumeViewerProps = {
  data: ResumeData
  locale?: Locale
}

const ResumeViewer = ({
  data,
  locale
}: ResumeViewerProps) => (
  <PDFViewer 
    style={{ flex: 1 }} 
    width="100%" 
    height="1200"
  >
    <Resume { ...data } locale={locale} />
  </PDFViewer>
);

export default ResumeViewer;
