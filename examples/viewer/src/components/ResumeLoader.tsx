import React, { useRef } from 'react';
import { Resume } from '@resume-creator/types';

type ResumeLoaderProps = {
  onChange: (resume: Resume) => void,
  className?: string,
}

const ResumeLoader = ({
  onChange,
  className
}: ResumeLoaderProps) => {
  const reader = new FileReader();
  const inputRef: React.LegacyRef<HTMLInputElement> = useRef(null);

  const handleButtonClick = () => {
    inputRef?.current?.click();
  }

  const handleFileRead = () => {
    const content = "" + reader.result;
    onChange(JSON.parse(content));
  }

  const handleFileChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    reader.onloadend = handleFileRead;
    file && reader.readAsText(file);
  }

  return (
    <button 
      className={className}
      onClick={handleButtonClick}
    >
      Load Resume
      <input 
        type="file"
        ref={inputRef}
        name="inputResumeFile"
        onChange={handleFileChanged}
        hidden
      />
    </button>
  );
}

export default ResumeLoader;
