
import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

export default function CardName(){

  const name : string = "Gustavo Cecato";

  return(
    <>
      <main>
        <div className="flex items-center justify-center w-full h-screen">
          <h1 className="text-6xl font-semibold mb-32">
            {name}          
          </h1>
          
        </div>
      </main>
    </>
  )
}

