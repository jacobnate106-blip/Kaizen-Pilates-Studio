import React, { createContext, useContext, useEffect, useState } from 'react';
import { RoutePath } from '../types';

interface RouterContextType {
  currentPath: RoutePath;
  navigate: (path: RoutePath | string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

const normalizePath = (path: string): RoutePath => {
  const clean = path.replace(/\/+$/, '') || '/';
  // Support legacy routes redirecting to new structure
  if (clean === '/who-we-are') return '/our-story';
  if (clean === '/schedule') return '/private-sessions';
  if (clean === '/getting-started') return '/';

  const validPaths: RoutePath[] = [
    '/',
    '/our-story',
    '/who-we-are',
    '/private-sessions',
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
  '/': 'KAIZEN Pilates Studio | Private Classical Pilates · Lorton, Virginia',
  '/our-story': 'Our Story | KAIZEN Pilates Studio',
  '/who-we-are': 'Our Story | KAIZEN Pilates Studio',
  '/private-sessions': 'Private Sessions | KAIZEN Pilates Studio',
  '/schedule': 'Private Sessions | KAIZEN Pilates Studio',
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
    // If there is an anchor hash in the URL, scroll to it, otherwise scroll to top
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [currentPath]);

  const navigate = (path: RoutePath | string) => {
    // Check if path has a hash (e.g., '/#your-first-session')
    const [pathname, hash] = path.split('#');
    const normalized = normalizePath(pathname || '/');

    if (normalized !== currentPath) {
      setCurrentPath(normalized);
      const targetUrl = hash ? `${normalized}#${hash}` : normalized;
      window.history.pushState({}, '', targetUrl);
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else if (hash) {
      window.history.pushState({}, '', `${normalized}#${hash}`);
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
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
