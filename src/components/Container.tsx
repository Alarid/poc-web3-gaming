import React from 'react';

export default function Container({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto bg-gray p-8 m-8 rounded-md shadow-xl text-secondary">
      {title && (
        <h1 className="text-3xl text-primary text-center border-b-2 border-secondary pb-4 mb-8">
          {title}
        </h1>
      )}
      {children}
    </div>
  );
}
