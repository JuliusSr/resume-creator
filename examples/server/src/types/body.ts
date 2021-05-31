import { Locale, Resume as ResumeData } from '@resume-creator/types';

export interface ResumeRequest {
  data: ResumeData;
  locale?: Locale;
}
