import React from 'react';
import ReactDOM from 'react-dom';
import ResumeViewer from '@resume-creator/renderer';
import { Resume as ResumeProps } from '@resume-creator/types';
import resume from './resources/resume_placeholder.json';

const MOUNT_ELEMENT = document.getElementById('root');

const resumeData: ResumeProps = { ...resume };

ReactDOM.render(
  <ResumeViewer 
    data={resumeData}
    locale="en-US"
  />, 
  MOUNT_ELEMENT
);
