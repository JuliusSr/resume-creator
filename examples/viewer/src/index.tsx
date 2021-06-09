import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ResumeViewer from '@resume-creator/renderer';
import { Locale, Resume as ResumeProps } from '@resume-creator/types';
import placeholdersResume from '@resume-creator/example-data/resume_placeholder.json';
import ResumeLoader from './components/ResumeLoader';
import LanguageSelector from './components/LanguageSelector';
import './index.css';

const MOUNT_ELEMENT = document.getElementById('root');

const locales: Record<string, Locale> = {
  English: "en-US",
  Italiano: "it-IT"
}

const defaultResume: ResumeProps = placeholdersResume;
const defaultLanguage: string = "English";

const ViewerPage = () => {
  const [resume, setResume] = useState(defaultResume);
  const [language, setLanguage] = useState(defaultLanguage);
  
  const handleResumeChange = (newResume: ResumeProps) => {
    newResume && setResume(newResume);
  }

  const handleLanguageChange = (newLanguage: string) => {
    newLanguage && setLanguage(newLanguage)
  }
  
  return (
    <div>
      <div className="options">
        <ResumeLoader 
          className="option loadResumeButton"
          onChange={handleResumeChange} 
        />
        <LanguageSelector 
          className="option languageSelector"
          languages={Object.keys(locales)} 
          onChange={handleLanguageChange} 
        />
      </div>
      <ResumeViewer 
        style={{ width: "100%", height: 1200 }}
        data={resume}
        locale={locales[language]}
      />
    </div>
  );
}

ReactDOM.render(
  <ViewerPage />,
  MOUNT_ELEMENT
);
