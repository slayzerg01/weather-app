'use client';

import { useRouter } from 'next/navigation';
import React, { FormEvent } from 'react';

export default function Home() {
  const router = useRouter()
  
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const location = formData.get('location');
    router.push(`/dashboard?location=${location}`);
  }

  return (
    <main className="flex flex-grow p-5 bg-gray-300 justify-center">
      <div className="self-start w-1/3 h-1/4 bg-white rounded-2xl items-center flex flex-col p-5">
        <span className="text-2xl text-gray-700"> Enter the name of the locality </span>
          <form className="max-w-md flex flex-1 justify-items-center" onSubmit={onSubmit}>   
            <div className="relative self-center">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input name="location" type="search" autoComplete='off'
                className="w-96 block p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
                focus:outline-none focus:ring-blue-500 focus:border-2 focus:border-blue-500" 
                placeholder="Search location..." 
                required />
                
                <button type="submit" 
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 
                focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
                  Search
                </button>
            </div>
          </form>
      </div>
    </main>
  );
}
