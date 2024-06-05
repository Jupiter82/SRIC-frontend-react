"use client";
import { useEffect, useState } from "react";
import * as lucide from "lucide-react";
import { userFetchApi } from "@/app/utils/httpUtils";

const Service = () => {
  const [data, setData] = useState([]);

  const getService = async () => {
    try {
      const response = await userFetchApi("api/v1/service/home");
      if (response.status === 200) {
        setData(response.data.result);
      } else {
        console.error("Error fetching service info:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching service info:", error);
    }
  };

  useEffect(() => {
    getService();
  }, []);

  return (
    <section
      id="features"
      className="container mx-auto px-4 space-y-6 bg-slate-50 py-8 md:py-12 lg:py-20"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-3xl text-blue-500">
          Our Services
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Softech Innovation and Research Center provides different services
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {data.map((item, index) => {
          const IconComponent = lucide[item.icon];
          return (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow-md hover:bg-blue-300 transition ease-in-out delay-100 hover:shadow-gray-600 p-2 "
            >
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="mr-4  p-2">
                  {IconComponent ? (
                    <IconComponent size={46} />
                  ) : (
                    <p>Icon not found</p>
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm">{item.description.slice(0, 120)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
