import React from 'react';
import ReactDOM from 'react-dom';
import ResumeViewer from '@resume-creator/renderer';
import { Resume as ResumeProps } from '@resume-creator/types';

const MOUNT_ELEMENT = document.getElementById('root');

const resumeData: ResumeProps = {
  personalData: {
    name: "Resume",
    role: "Placeholder",
    email: "resume@placeholder.com"
  }
};

ReactDOM.render(
  <ResumeViewer { ...resumeData } />, 
  MOUNT_ELEMENT
);
