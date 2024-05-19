import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className="">
          <div>
            <Navbar />
            <Sidebar />
          </div>
          <div className="md:ml-56">
          {children}
          </div>
        </body>
      </html>
    );
  }
  