import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

type RatingProps = {
  value: number;
  count: number;
};

export function Rating({ value, count }: RatingProps) {

  return (
    <>  
    <div className="flex flex-row  justify-center items-center gap-1 ">
        <span className='mt-1'>{value}</span>
        <StarIcon 
          className="size-6 text-white-500"
        />
    </div>
        <small>{count} reviews</small>
    </>
  );
}
