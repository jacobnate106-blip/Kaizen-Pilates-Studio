export type RoutePath =
  | '/'
  | '/who-we-are'
  | '/schedule'
  | '/studio-policies'
  | '/getting-started'
  | '/contact';

export type Theme = 'light' | 'dark';

export interface NavItem {
  label: string;
  path: RoutePath;
}

export interface ScheduleSession {
  id: string;
  day: string;
  time: string;
  title: string;
  focus: string;
  duration: string;
  level: string;
}

export interface PolicyItem {
  id: string;
  title: string;
  summary: string;
  details: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
