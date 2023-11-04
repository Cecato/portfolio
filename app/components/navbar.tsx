import Link from "next/link";

export default function Navbar(){
  return(
    <>
      <main>
        <div className="w-full h-auto">

          <div className="flex justify-end space-x-6 mr-52 mt-10 text-lg underline">
            <Link href="#about" ><h1> About </h1></Link>
            <h1> Projects </h1>
            <h1> Contacts </h1>
          </div>

        </div>
      </main>
    </>
  );
}