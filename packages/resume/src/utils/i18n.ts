import { Locale } from '@resume-creator/types';

type WithTitle = {
  title: string
}

interface ContactsLabels extends WithTitle {
  title: string,
  phone: string,
  email: string,
  address: string,
  city: string
};

interface LanguageLabels extends WithTitle {}

interface ExperienceLabels extends WithTitle {
  present: string
}

interface EducationLabels extends WithTitle {}

type ResumeLabels = {
  contacts: ContactsLabels,
  languages: LanguageLabels,
  experience: ExperienceLabels,
  education: EducationLabels
};

var currentLocale: Locale = "en-US";

const setLocale = (locale: Locale) => {
  currentLocale = locale;
};

const getLabelsByLocale = (locale: Locale): ResumeLabels => {
  return require(`../resources/${locale}.json`);
};

const getLabels = (): ResumeLabels => {
  return getLabelsByLocale(currentLocale);
};

export {
  setLocale,
  getLabels
}
