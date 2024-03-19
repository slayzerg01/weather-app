'use client';

import { useRouter } from 'next/navigation';
import React, { FormEvent } from 'react';
import {Card, CardBody, Button} from "@nextui-org/react";

export default function Home() {
  const router = useRouter()
  
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const location = formData.get('location');
    router.push(`/dashboard?location=${location}`);
  }

  return (
    <main className="bg-gray-300 dark:bg-black flex flex-grow p-5 justify-center">
      <Card className="dark:bg-zinc-800 max-h-[250px] w-5/6 md:w-1/4 m-4">
        <CardBody>
          <span className="text-sm md:text-2xl mx-auto m-2"> Enter the name of the locality </span>
          <form className="max-w-md flex flex-1 justify-items-center" onSubmit={onSubmit}>   
            <div className="relative self-center w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input name="location" type="search" autoComplete='off'
                className="w-full block p-4 ps-10 text-sm border border-gray-300 rounded-lg
                focus:outline-none focus:ring-blue-500 focus:border-2 focus:border-blue-500" 
                placeholder="Search location..." 
                required />
                
                <Button type="submit" 
                  className="absolute end-2 bottom-2 focus:ring-4
                  focus:outline-none rounded-lg text-sm px-4">
                  Search
                </Button>
            </div>
          </form>
          </CardBody>
      </Card>
    </main>
  );
}
