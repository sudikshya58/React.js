import React from 'react';

export const Button = ({ name, loading, disabled }) => {
  return (
    <div>
      <button 
        className='bg-blue-300 p-4 w-60 font-bold rounded disabled:opacity-50' 
        disabled={disabled || loading}
      >
        {loading ? "Submitting.... ": name}
      </button>
    </div>
  );
};
