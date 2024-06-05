"use client";
import { userFetchApi } from "@/app/utils/httpUtils";
import { useEffect, useState } from "react";
import { Clock, Mail, MapPin, PhoneCall } from "lucide-react";

const Footer = () => {
  const [data, setData] = useState([]);
  const [serdata, setSerData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Add state for loading indicator

  const getContactInfo = async () => {
    setIsLoading(true); // Set loading indicator to true before fetching data
    try {
      const response = await userFetchApi("api/v1/contactInfo/home");
      if (response.status === 200) {
        setData(response.data.result);
      } else {
        console.error("Error fetching contact info:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching contact info:", error);
    } finally {
      setIsLoading(false); // Set loading indicator to false after fetching data
    }
  };

  const getServiceInfo = async () => {
    setIsLoading(true); // Set loading indicator to true before fetching data
    try {
      const response = await userFetchApi("api/v1/service/home");
      if (response.status === 200) {
        setSerData(response.data.result);
      } else {
        console.error("Error fetching service info:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching service info:", error);
    } finally {
      setIsLoading(false); // Set loading indicator to false after fetching data
    }
  };

  useEffect(() => {
    getContactInfo();
    getServiceInfo();
  }, []);

  return (
    <footer className="relative bg-black text-white py-20 sm:mx-2 mt-4 flex flex-col sm:flex-row gap-2">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/images/foter.gif')" }}
      ></div>
      <div className="relative px-4  flex flex-col md:grid md:grid-cols-4 gap-4">
        <div className="flex flex-col  items-center ">
          <h1 className="text-3xl text-white inline-block px-2 border-b-2 border-gradient">
            Service
          </h1>
          <ul className="md:ml-14 flex flex-col gap-2 pt-2">
            {serdata?.map((item, index) => (
              <li key={index}>{item?.title}</li>
            ))}
          </ul>
        </div>
        {data?.map((item, index) => (
          <div
            className="flex flex-col  justify-center items-center "
            key={index}
          >
            <h1 className="text-3xl text-white inline-block px-2 border-b-2 border-gradient">
              Contact Info
            </h1>
            <ul className="md:ml-14 flex flex-col gap-2 pt-2">
              <li className="flex gap-4">
                <MapPin /> {item?.reference}
              </li>
              <li>{item?.address}</li>
              <li className="flex gap-4">
                <Mail /> {item?.email}
              </li>
              <li className="flex gap-4">
                <PhoneCall /> {item?.phone}
              </li>
              <li className="flex gap-4">
                <Clock /> {item?.hour}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
