import React from 'react'; 
import { PDFViewer } from '@react-pdf/renderer';
import Resume from '@resume-creator/resume';

const ResumeViewer = () => (
  <PDFViewer 
    style={{ flex: 1 }} 
    width="100%" 
    height="1200"
  >
    <Resume />
  </PDFViewer>
);

export default ResumeViewer;
