import React, { useState } from "react";

interface User {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
}


export default function Projects() {

  return (
    <>
      <main>
        <div className="flex items-center justify-center w-full h-screen">
          <div className="text-center text-6xl font-semibold m-auto">
            <h1>Projects</h1>
          </div>
        </div>
      </main>
    </>
  )
}