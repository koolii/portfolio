export interface SNS {
  id: number;
  name: string;
  url: string;
}

export interface History {
  yearFrom: number;
  yearTo?: number;
  description: string[];
}

export interface Experience {
  lang: string;
  techs: string[];
  description: string[];
  years: number;
  rank: number;
}
