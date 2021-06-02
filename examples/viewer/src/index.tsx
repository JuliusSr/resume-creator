import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ResumeViewer from '@resume-creator/renderer';
import { Locale, Resume as ResumeProps } from '@resume-creator/types';
import placeholdersResume from '@resume-creator/example-data/resume_placeholder.json';
import ResumeLoader from './components/ResumeLoader';
import LanguageSelector from './components/LanguageSelector';

const MOUNT_ELEMENT = document.getElementById('root');

const styles: Record<string, React.CSSProperties> = {
  options: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "5px",
  },
  loadButton: {
    flexGrow: 1,
    textAlign: "center",
    marginRight: "5px",
    padding: "5px",
  }, 
  languageSelect: {
    paddingLeft: "5px",
    paddingRight: "5px",
  }
}

const locales: Record<string, Locale> = {
  English: "en-US",
  Italiano: "it-IT"
}

const ViewerPage = () => {
  const defaultResume: ResumeProps = placeholdersResume;
  const [resume, setResume] = useState(defaultResume);
  const [language, setLanguage] = useState("english");
  
  const handleResumeChange = (newResume: ResumeProps) => {
    console.log("new resume", newResume)
    newResume && setResume(newResume);
  }

  const handleLanguageChange = (newLanguage: string) => {
    newLanguage && setLanguage(newLanguage)
  }
  
  return (
    <div>
      <div style={styles.options}>
        <ResumeLoader 
          style={styles.loadButton}
          onChange={handleResumeChange} 
        />
        <LanguageSelector 
          style={styles.languageSelect}
          languages={Object.keys(locales)} 
          onChange={handleLanguageChange} 
        />
      </div>
      <ResumeViewer 
        style={{ width: "100%", height: 1200 }}
        data={resume}
        locale={locales[language] }
      />
    </div>
  );
}

ReactDOM.render(
  <ViewerPage />,
  MOUNT_ELEMENT
);
