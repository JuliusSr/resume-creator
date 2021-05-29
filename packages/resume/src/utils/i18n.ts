import { Locale } from '@resume-creator/types';

type WithTitle = {
  title: string
}

interface ContactsLabels extends WithTitle {
  title: string,
  phone: string,
  email: string,
  website: string,
  address: string,
  city: string
};

interface LanguageLabels extends WithTitle {}

interface ExperienceLabels extends WithTitle {
  present: string
}

interface EducationLabels extends WithTitle {}

interface SkillsLabels extends WithTitle {}

interface ProfileLabels extends WithTitle {}

interface ReferencesLabels extends WithTitle {}

type ResumeLabels = {
  contacts: ContactsLabels,
  languages: LanguageLabels,
  experience: ExperienceLabels,
  education: EducationLabels,
  skills: SkillsLabels,
  profile: ProfileLabels,
  references: ReferencesLabels,
  months: Array<string>
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
