import React from 'react';

const LoadingAnimation = () => {
  return (
    <div className='flex items-center justify-center'>
      <h1 className='text-6xl font-semibold flex items-center gap-2'>L<img className='w-20 animate-spin' src="/logo.png" alt="" />ading...</h1>
    </div>
  );
};

export default LoadingAnimation;