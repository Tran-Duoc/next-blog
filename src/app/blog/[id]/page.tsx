'use client';

import React from 'react';

const page = ({ params }: { params: { id: string | number } }) => {
  console.log(params);
  return (
    <div>
      <p>Post: {params.id}</p>
    </div>
  );
};

export default page;
