import Link from 'next/link';
import type { ReactNode } from 'react';
import React, {useState} from 'react'
import dropdownlist from './MyAccount/dropdownlist.json';
import {Button} from '../button/Button'

type SchoolHeaderProps = {
  logo: ReactNode;
};

<<<<<<< HEAD
function SchoolHeader({logo}: TutorHeaderProps){
=======
function SchoolHeader({logo}: SchoolHeaderProps){
>>>>>>> 9d4cbc66ffa56416784bb050d761da2244904bbc
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const handleToggleDropdown = () => {
    setdropdownOpen(prev => !prev); // Toggle the value using the previous value
  };

  {console.log(dropdownOpen)}
  return(
  <div className="flex flex-wrap items-center justify-between">
      <div>
        <nav>
          <ul className="navbar flex items-center text-xs font-medium text-gray-800">
              <li>
              <Button onClick={handleToggleDropdown}>
                My Account
              </Button>
              {dropdownOpen && 
                <div className='absolute overflow-hidden'>
                  <ul>
                  {dropdownlist.map((item)=>(
                    <li key={item.page} 
                    className="px-4 py-2 hover:bg-primary-300 bg-primary-100 cursor-pointer min-w-full max-w-md">
                      <h3>{item.page}</h3>
                    </li>
                  ))}
                  </ul>
                </div>
                }
              </li>
          </ul>
        </nav>
        
                
      </div>

      <style jsx>
        {`
          .navbar :global(li:not(:first-child)) {
            @apply mt-0;
          }

          .navbar :global(li:not(:last-child)) {
            @apply mr-5;
          }
        `}
      </style>
    </div>
  )
};

export { SchoolHeader };
