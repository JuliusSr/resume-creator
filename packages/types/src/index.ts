export type PersonalData = {
  name: string,
  role?: string,
  contacts?: Contacts,
};

export type Contacts = {
  email?: string,
  phone?: string,
  address?: string,
}

export type TimeFrame = {
  dateFrom: string, //TODO should be date
  dateTo?: string  //TODO should be date
}

export interface Education extends TimeFrame {
  institute: string,
  degree: string
};

export interface Experience extends TimeFrame {
  company: string,
  position: string,
  details: Array<string>
};

export type Language = {
  name: string,
  level: number
};

export type Resume = {
  image?: string,
  personalData?: PersonalData,
  education?: Array<Education>,
  experience?: Array<Experience>,
  languages?: Array<Language>
};
