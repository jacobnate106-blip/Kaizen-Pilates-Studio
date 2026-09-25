import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { HomePage } from './pages/HomePage';
import { WhoWeArePage } from './pages/WhoWeArePage';
import { SchedulePage } from './pages/SchedulePage';
import { StudioPoliciesPage } from './pages/StudioPoliciesPage';
import { GettingStartedPage } from './pages/GettingStartedPage';
import { ContactPage } from './pages/ContactPage';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/who-we-are':
        return <WhoWeArePage />;
      case '/schedule':
        return <SchedulePage />;
      case '/studio-policies':
        return <StudioPoliciesPage />;
      case '/getting-started':
        return <GettingStartedPage />;
      case '/contact':
        return <ContactPage />;
      case '/':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-frost dark:bg-ink text-ink dark:text-frost selection:bg-stone selection:text-ink font-sans transition-colors duration-300">
      <Header />
      <main className="flex-1 w-full flex flex-col">{renderCurrentPage()}</main>
      <Footer />
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
