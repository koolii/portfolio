export interface SNS {
  id: number;
  name: string;
  url: string;
}

export interface History {
  id: number;
  yearFrom: number;
  yearTo?: number;
  description: string[];
}

export interface Experience {
  id: number;
  lang: string;
  techs: string[];
  description: string[];
  years: number;
  rank: number;
}
