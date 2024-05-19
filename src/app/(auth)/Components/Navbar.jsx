"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Navbar = () => {
  const router = useRouter()
  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(!token){
      router.push("/login")
    }

  },[])
  return (
    <nav className="bg-gray-800 border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 justify-start">
            <Link href="/">
              <h1 className="flex items-center">
                <Image
                  width={1000}
                  height={1000}
                  className="block lg:hidden h-8 w-auto"
                  src="/logo.svg"
                  alt="Logo"
                />
                <span className="ml-2 text-white font-semibold">SRIC</span>
              </h1>
            </Link>
          </div>
          <div className="">
            <Link href={"/login"}>
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded" onClick={()=>{
                localStorage.removeItem("token")
              }}>
                Logout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
