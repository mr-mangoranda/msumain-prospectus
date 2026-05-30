import { colleges } from './constants';

export type ColorScheme = 'maroon' | 'blue' | 'orange' | 'purple' | 'yellow' | 'green' | 'pink';

export type College = typeof colleges[number];

export type Course = {
  id: string;
  code: string;
  name: string;
  description: string;
  college: College;
  duration: string;
  careers: string;
  colorScheme: ColorScheme;
  pdfFileName: string;
  isActive: boolean;
};
