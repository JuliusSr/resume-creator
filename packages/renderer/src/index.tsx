import React from 'react'; 
import ReactPDF, { PDFViewer } from '@react-pdf/renderer';
import Resume from '@resume-creator/resume';
import { Resume as ResumeData, Locale } from '@resume-creator/types';
import { Style } from '@react-pdf/types';

type ResumeViewerProps = {
  data: ResumeData
  locale?: Locale,
  style?: Style
}

const ResumeViewer = ({
  data,
  locale,
  style
}: ResumeViewerProps) => (
  <PDFViewer style={style}>
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
  const normalizedDirectory = directory.endsWith("/")
    ? directory.slice(0, -1)
    : directory;
  const outputFilePath = `${normalizedDirectory}/${filename}.pdf`
  
  return ReactPDF.render(
    <Resume { ...data } locale={locale} />,
    outputFilePath
  )
}

export default ResumeViewer;

export {
  getResumeStream,
  saveResumeToFile
}
