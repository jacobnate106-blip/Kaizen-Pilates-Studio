export type RoutePath =
  | '/'
  | '/our-story'
  | '/who-we-are' // preserved for backward-compatibility redirect
  | '/private-sessions'
  | '/schedule' // preserved
  | '/studio-policies'
  | '/getting-started'
  | '/contact';

export type Theme = 'light' | 'dark';

export interface NavItem {
  label: string;
  path: RoutePath;
}

export interface PricingOption {
  option: string;
  price: string;
  expiration: string;
}

export interface FAQItem {
  id?: string;
  question: string;
  answer: string;
}

export interface PolicyItem {
  id: string;
  title: string;
  summary: string;
  details: string;
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
