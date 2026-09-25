import React, { createContext, useContext, useEffect, useState } from 'react';
import { RoutePath } from '../types';

interface RouterContextType {
  currentPath: RoutePath;
  navigate: (path: RoutePath) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

const normalizePath = (path: string): RoutePath => {
  const clean = path.replace(/\/+$/, '') || '/';
  const validPaths: RoutePath[] = [
    '/',
    '/who-we-are',
    '/schedule',
    '/studio-policies',
    '/getting-started',
    '/contact',
  ];
  if (validPaths.includes(clean as RoutePath)) {
    return clean as RoutePath;
  }
  return '/';
};

const PAGE_TITLES: Record<RoutePath, string> = {
  '/': 'KAIZEN Pilates Studio | Lorton, VA',
  '/who-we-are': 'Who We Are | KAIZEN Pilates Studio',
  '/schedule': 'Schedule | KAIZEN Pilates Studio',
  '/studio-policies': 'Studio Policies | KAIZEN Pilates Studio',
  '/getting-started': 'Getting Started | KAIZEN Pilates Studio',
  '/contact': 'Contact | KAIZEN Pilates Studio',
};

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<RoutePath>(() => {
    if (typeof window !== 'undefined') {
      return normalizePath(window.location.pathname);
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    document.title = PAGE_TITLES[currentPath] || 'KAIZEN Pilates Studio';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [currentPath]);

  const navigate = (path: RoutePath) => {
    const normalized = normalizePath(path);
    if (normalized !== currentPath) {
      window.history.pushState({}, '', normalized);
      setCurrentPath(normalized);
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
