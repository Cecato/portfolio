"use client"
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Card from "../components/card";

interface User {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
}

interface Repo {
  name: string;
  description: string;
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
        const {avatar_url, name, bio, login} = userData;
        setCurrentUser({avatar_url, name, bio, login});
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
    <>
      <main>
        <div className="flex items-center justify-center w-full h-screen">
          <div className="text-center text-6xl font-semibold m-auto border border-white">
            <div>
              <input className="text-black placeholder:@username "
                name="usuario"
                placeholder="@Cecato"
                value={user}
                readOnly/>
            </div>
            {isLoading ?(
              <p>Loading...</p>
            ) : (
              <>
                {currentUser?.name ?(
                  <>
                    <div className="perfil">
                      <Image
                        src={currentUser.avatar_url}
                        width={64}
                        height={64}
                        alt="profile"
                      />
                    </div>
                    <div className="w-auto h-auto border border-white text-white">
                      <h3>{currentUser.name}</h3>
                      <span>@{currentUser.login}</span>
                      <p>{currentUser.bio}</p>
                    </div>

                  </>
                ):null}
                {repos ? (
                  <div>
                    <h4 className='repositorio'>Repositórios</h4>
                    <ul>
                      {repos.map(repo => (
                        <li key={repo.name}>
                          <strong>{repo.name}</strong>: {repo.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </>
            )}
          </div>
        </div>
      </main>
    </>
  )
}