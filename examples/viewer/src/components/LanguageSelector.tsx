import React from 'react';

type LanguageSelectorProps = {
  languages: Array<string>,
  onChange: (language: string) => void,
  className?: string
}

const LanguageSelector = ({
  languages,
  onChange,
  className
}: LanguageSelectorProps) => {

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.target.value && onChange(event.target.value)
  }
  
  return (
    <select className={className} onChange={handleLanguageChange}>
      {languages.map((lang, i) => 
        <option key={i} value={lang}>{lang}</option>
      )}
    </select>
  );
}

export default LanguageSelector;
