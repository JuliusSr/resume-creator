import React from 'react'; 
import ReactPDF, { PDFViewer } from '@react-pdf/renderer';
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

const getResumeStream = (
  data: ResumeData,
  locale?: Locale
) => {
  return ReactPDF.renderToStream(
    <Resume { ...data } locale={locale} />
  );
}

const saveResumeToFile = (
  directory: string,
  filename: string,
  data: ResumeData,
  locale?: Locale
) => {
  ReactPDF.render(
    <Resume { ...data } locale={locale} />,
    `${directory}/${filename}.pdf`
  )
}

export default ResumeViewer;

export {
  getResumeStream,
  saveResumeToFile
}
