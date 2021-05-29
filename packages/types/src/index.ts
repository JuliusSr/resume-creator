export type PersonalData = {
  name: string,
  role?: string,
  contacts?: Contacts,
};

export type Address = {
  city: string,
  street?: string,
  number?: string,
  postalCode?: string,
  country?: string
}

export type Contacts = {
  email?: string,
  phone?: string,
  address?: Address,
};

//TODO consider using a union type on numbers 1-12 for month
//Avoiding for now to avoid deserialization type warnings
export type Date = {
  year: number,
  month?: number
}

export type TimeFrame = {
  dateFrom: Date,
  dateTo?: Date
};

export interface Education extends TimeFrame {
  institute: string,
  degree: string
};

export interface Experience extends TimeFrame {
  company: string,
  position: string,
  description?: string,
  details?: Array<string>
};

export type Language = {
  name: string,
  level?: number
};

export type Skill = {
  name: string,
  details?: Array<string>,
  level?: number
}

export type Reference = {
  name: string,
  company: string,
  email?: string,
  phone?: string,
}

export type Resume = {
  picture?: string,
  personalData?: PersonalData,
  education?: Array<Education>,
  experience?: Array<Experience>,
  languages?: Array<Language>,
  skills?: Array<Skill>,
  profile?: string,
  references?: Array<Reference>,
};

export type Locale = "en-US" | "it-IT";
