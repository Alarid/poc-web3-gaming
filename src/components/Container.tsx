import React from 'react';

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto bg-gray p-8 m-8 rounded-md shadow-xl text-secondary">
      {children}
    </div>
  );
}
