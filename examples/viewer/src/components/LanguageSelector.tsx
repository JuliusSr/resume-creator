import React from 'react';
import { Locale } from '@resume-creator/types';

type LanguageSelectorProps = {
  languages: Array<string>,
  onChange: (language: string) => void,
  style?: React.CSSProperties,
}

const LanguageSelector = ({
  languages,
  onChange,
  style
}: LanguageSelectorProps) => {

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.target.value && onChange(event.target.value)
  }
  
  return (
    <select style={style} onChange={handleLanguageChange}>
      {languages.map(lang => 
        <option value={lang}>{lang}</option>
      )}
    </select>
  );
}

export default LanguageSelector;
