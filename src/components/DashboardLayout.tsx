
import React, { ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';

interface DashboardLayoutProps {
  children: ReactNode;
  userRole: string;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, userRole }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar userRole={userRole} />
      <main className="flex-1 p-6 overflow-auto">
        {children}
      </main>
    </div>
  );
};
