import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { HomePage } from './pages/HomePage';
import { OurStoryPage } from './pages/OurStoryPage';
import { PrivateSessionsPage } from './pages/PrivateSessionsPage';
import { StudioPoliciesPage } from './pages/StudioPoliciesPage';
import { ContactPage } from './pages/ContactPage';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/our-story':
      case '/who-we-are':
        return <OurStoryPage />;
      case '/private-sessions':
      case '/schedule':
        return <PrivateSessionsPage />;
      case '/studio-policies':
        return <StudioPoliciesPage />;
      case '/contact':
        return <ContactPage />;
      case '/':
      case '/getting-started':
      default:
        return <HomePage />;
    }
  };

  const getFooterVariant = () => {
    if (currentPath === '/private-sessions' || currentPath === '/schedule') {
      return 'private-sessions';
    }
    if (currentPath === '/contact') {
      return 'contact';
    }
    if (currentPath === '/our-story' || currentPath === '/who-we-are') {
      return 'our-story';
    }
    if (currentPath === '/studio-policies') {
      return 'policies';
    }
    return 'home';
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-frost dark:bg-ink text-ink dark:text-frost selection:bg-stone selection:text-ink font-sans transition-colors duration-300">
      <Header />
      <main className="flex-1 w-full flex flex-col">{renderCurrentPage()}</main>
      <Footer page={getFooterVariant()} />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </ThemeProvider>
  );
}
