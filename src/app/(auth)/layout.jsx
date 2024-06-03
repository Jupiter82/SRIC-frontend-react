import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { ToastContainer } from "./nexttoast";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <div>
          <Navbar />
          <Sidebar />
        </div>
        <ToastContainer />
        <div className="md:ml-56">{children}</div>
      </body>
    </html>
  );
}
