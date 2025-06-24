import pages from '../config/pages.json';

type PageConfig = {
  path: string;
  classes: string;
  requiresAuth?: boolean;
  [key: string]: any;
};

export const requiresAuth = (currentRoute: string): boolean => {
  const page = Object.values(pages).find(
    (page: any) => page.path === currentRoute
  ) as PageConfig | undefined;
  return !!page?.requiresAuth;
};
