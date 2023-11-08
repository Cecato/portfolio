import { ReactNode } from "react";

type Props = {
  children: ReactNode;
}
export default function Card({children}:Props){
  return(
    <>
      <main>
        <div className="border border-white w-full h-full border-opacity-60 p-5">
          {children}
        </div>
      </main>
    </>
  )
}