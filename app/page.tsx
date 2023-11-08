"use client"
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Card from './components/card';


type VerticalTextProps = {
  text: string;

};

function VerticalText({text} : VerticalTextProps){
  const letters = text.split('');

  return(
    <div className='vertical-text-container'>
      {letters.map((letter, index) =>(
        <p key={index} className='vertical-letter'>
          <span className='letter-spacing-'>{letter}</span>
        </p>
        
      ))}
    </div>
  )
}

function calculateAge(dateOfBirth: Date, currentDate: Date = new Date()): number {
  const millisecondsDifference = currentDate.getTime() - dateOfBirth.getTime();
  const millisecondsInAYear = 1000 * 60 * 60 * 24 * 365.25;
  return Math.floor(millisecondsDifference / millisecondsInAYear);
}



export default function Home(){

  const name : string= "Gustavo";
  const surname : string = "Cecato";
  
  const dateOfBirth = new Date("2001-06-01");
  const age = calculateAge(dateOfBirth);
  


  return(
    <>
      <main>
        <div className="flex items-center justify-center w-full h-screen ">
          <div className='absolute w-10 h-10  z-20 left-96 mb-60 ml-6'>
            <h1 className='border-2 border-white border-r-0 border-t-0 border-b-0 p-1 border-opacity-60'
              style={{margin:"-5"}}>
              <VerticalText text= {name} />
            </h1>

          </div>
          <div className='absolute top-64 z-20'>
            <Card>
              <p>Hello, I&apos;m Development</p>
              <p>I like to eat <span className='text-orange-100'>persimmons</span>
                <span className='absolute -top-6 right-10 opacity-80'>
                  <Image 
                    src={"/ico/caqui.png"}
                    width={24}
                    height={24} 
                    alt={'Caqui'}/>
                </span>      
              </p>
              <p>{age} years old.</p>
              <p></p>   
            </Card>
          </div>
          <div className='flex w-full h-full opacity-40 '>
            <div className=' w-full h-full relative m-auto bg-black mr-96'>
              <Image
                src={"/images/cardname2.png"}
                alt={"img"}
                fill
                style={{objectFit:"contain"}}/>
            </div>
            <div className=' w-full h-full relative m-auto'>
              <Image
                src={"/images/cardname1.jpg"}
                alt={"img"}
                fill
                style={{objectFit:"contain"}}/>
            </div>
          </div>
          <div className='absolute bg-black  w-full h-32 top-3/4 blur-2xl opacity-100 z-30'/>
          <div className='absolute bg-black  w-full h-32 top-3/4 blur-2xl opacity-100 z-30'/>     
          <div className='absolute bg-black  w-full h-32 top-3/4 blur-2xl opacity-100 z-30'/>    
        </div>   
      </main>
    </>
  )
}



