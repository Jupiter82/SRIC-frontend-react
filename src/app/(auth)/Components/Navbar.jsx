"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const Navbar = () => {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("token");
    toast.success("Logged out successfully");
    setTimeout(() => {
      router.replace("/login");
    }, 300);
  };



  return (
    <nav className="bg-gray-800 border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white font-semibold flex items-center">
            <Image width={32} height={32} src="/logo.svg" alt="Logo" />
            <span className="ml-2">SRIC</span>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded relative z-20"
          >
            Logout
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
