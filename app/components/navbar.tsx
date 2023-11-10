'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar(){
  const currentPath = usePathname;
  return(
    <>
      <main>
        <div className="fixed w-full h-auto z-30">
          <div className="flex justify-end space-x-6 p-5 text-lg w-auto h-auto">
            
            <Link href="/" className="opacity-80 hover:opacity-100">
              <div className={currentPath() === '/' ? 'active-link' : ''} >
                <h1> About </h1>
              </div>
            </Link>
            <Link href="/projects" className="opacity-80 hover:opacity-100">
              <div className={currentPath() === '/projects' ? 'active-link' : ''} >
                <h1 className="opacity-80 hover:opacity-100"> Projects </h1>
              </div>
            </Link>
            <Link href="/contacts" className="opacity-80 hover:opacity-100">
              <div className={currentPath() === '/contacts' ? 'active-link' : ''} >
                <h1 className="opacity-80 hover:opacity-100"> Contacts </h1>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}