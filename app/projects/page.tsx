"use client"
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Card from "../components/card";
import Link from "next/link";

interface User {
  avatar_url: string;
  name: string;
  login: string;
}

interface Repo {
  name: string;
  description: string;
  language: string;
  svn_url: string;

}


export default function Projects() {

  const [user] = useState('Cecato');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleGetData = async (): Promise<void> => {
    try{
      const [userData, reposData] = await Promise.all([
        fetch(`https://api.github.com/users/${user}`).then((response) => response.json()),
        fetch(`https://api.github.com/users/${user}/repos`).then((response) => response.json())
      ])
      
      if(userData.name){
        const {avatar_url, name, login} = userData;
        setCurrentUser({avatar_url, name, login});
      }

      if (Array.isArray(reposData) && reposData.length) {
        setRepos(reposData);
      }
    }  finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    handleGetData();
  }, []);
 
  return (
    <main>
      <div className="flex justify-center w-full h-screen max-h-screen">
        <div className=""> 
          {isLoading ?(
            <p className="mt-52">Loading...</p>
          ) : (
            <>
              <div className="flex w-full h-auto justify-center mt-24">
                <div className="w-auto left-0">
                  {currentUser?.name ?(
                    <>
                      <div className="relative rounded-full w-24 h-24 overflow-hidden" >
                        <Image
                          src={currentUser.avatar_url}
                          alt="author"
                          quality={80}
                          style={{objectFit: "contain"}}
                          fill={true}
                        />
                      </div>
                      <div className="w-auto h-auto pr-5 pt-2">
                        <h1 className="text-base">{currentUser.name}</h1>
                        <span className="text-sm opacity-80">@{currentUser.login}</span>   
                      </div>
                    </>
                  ):null}
                </div>
                <div className="items-center justify-center  w-auto h-auto max-h-96 ">
                  {repos ? (
                    <div className="ml-20 border-b border-white border-opacity-60">
                      <h1 className='text-center text-base border-b border-white pb-7 border-opacity-60'>Repositories</h1>

                      <div className="overflow-y-scroll max-w-5xl max-h-96">
                        <ul className="">
                          {repos.map(repo => (
                            <div key={repo.name} className=" mb-3 mr-3 h-auto p-5 bg-gray-600 bg-opacity-30">   
                              <li>
                                <div className="flex space-x-3 ">      
                                  <h1 className="text-base">{repo.name}</h1>
                                  <Link 
                                    href={repo.svn_url}>
                                    <Image
                                      src={"/ico/link.png"}
                                      alt={"link"}
                                      width={1200}
                                      height={1200}
                                      className="w-5 h-5 hover:scale-110"
                                    />
                                  </Link>
                                </div>
                                <h2 className="text-sm opacity-80">{repo.description}</h2> 
                                <div className="w-5 pt-2">
                                  {repo.language ? (
                                    <Image
                                      src={`/ico/${encodeURIComponent(repo.language)}.png`}
                                      alt={"language"}
                                      width={1200}
                                      height={1200}
                                    />
                                  ): null}
                                  
                                </div>
                              </li>
                            </div>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  )
}