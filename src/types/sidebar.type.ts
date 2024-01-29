import { ReactNode } from 'react';

export type TPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TPath[];
};

export type TRoutes = {
  path: string;
  element: ReactNode;
};

export type TSideBarItems = {
  key: string;
  label: ReactNode;
  children?: TSideBarItems[];
};
