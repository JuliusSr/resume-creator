import React from 'react'; 
import { PDFViewer } from '@react-pdf/renderer';
import Resume from '@resume-creator/resume';
import { Resume as ResumeProps } from '@resume-creator/types';

const ResumeViewer = (props: ResumeProps) => (
  <PDFViewer 
    style={{ flex: 1 }} 
    width="100%" 
    height="1200"
  >
    <Resume { ...props } />
  </PDFViewer>
);

export default ResumeViewer;
