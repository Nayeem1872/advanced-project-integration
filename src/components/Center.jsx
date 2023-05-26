import React from 'react';

export default function Center({ children }) {
  return (
    <div className="flex justify-center">
    <div className="  w-full max-w-lg mx-auto">
      {children}
    </div>
  </div>
  );
}