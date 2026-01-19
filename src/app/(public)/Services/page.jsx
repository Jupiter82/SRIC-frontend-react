import React from "react";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="">
      <div className="relative overflow-hidden">
        <div className="absolute z-10 bg-black/50 w-[100%] h-[100%]"></div>
        <Image
          src="/images/banner1.jpg"
          width={1000}
          height={1000}
          className=" w-full h-[350px] object-cover"
          quality={85}
          alt="Carousel image 2"
        />
        <div className="">
          <h1 className="text-white z-10 font-bold text-4xl absolute top-[20%] md:left-[45%] left-[35%]">
            Our Services
          </h1>
          {/* <h1 className="text-white z-10 font-bold  absolute top-[30%] md:left-[45%] left-[35%]">Home/Our Service</h1> */}
        </div>
      </div>
      <div className="container mx-auto flex-col-1">
        <div className="container mx-auto sm:py-2 md:flex">
          <div className="md:h-[350px] overflow-hidden md:order-1">
            <Link href={"/Service1"}>
              <Image
                src="/images/service2.jpeg"
                width={1000}
                height={500}
                className="h-auto w-auto px-4"
                alt="image"
              />
            </Link>
          </div>
          <div className="px-4 container mx-auto md:h-[350px] md:order-2">
            <h1 className="px-8 text-3xl font-semibold">
              Software Development
            </h1>
            <p className="px-8 md:py-8">
              SRIC has carved out a successful niche for itself in
              custom software design and development. We provide complete
              software implementation process, starting with software design and
              development, software quality assurance testing, software
              deployment, up to further software upgrades and enhancements
              <br /> <br />
              The core software design and development services provided by
              SRIC include, but are not limited to, desktop
              application development, high-end client-server application
              development, enterprise application development and building
              end-to-end enterprise application integration (EAI) solutions,
              re-engineering, software systems maintenance and support.
            </p>
          </div>
        </div>
        <div className="container mx-auto sm:py-2 md:flex">
          <div className="md:h-[350px] overflow-hidden md:order-1">
            <Link href={"/Service2"}>
              <Image
                src="/images/service3.jpeg"
                width={1000}
                height={500}
                className="h-auto w-auto"
                alt="image"
              />
            </Link>
          </div>
          <div className="px-4 container mx-auto md:h-[350px] md:order-">
            <h1 className="px-8 text-3xl font-semibold">Web Development</h1>
            <p className="px-8 md:py-8">
              By combining marketing expertise and design skills, Science
              Foundation offers a full spectrum of professional, quality-driven
              services on custom website design and re-design, Flash web site
              design and programming, multimedia presentation design and
              development, corporate identity, custom print graphics, and
              original art work.
              <br /> <br />
              The team of design and marketing professionals at Science
              Foundation blends inspiration, creative approach and technical
              skills to help you communicate with your clients and network more
              effectively, position your brand, or take your business to new
              heights.
            </p>
          </div>
        </div>
        <div className="container mx-auto sm:py-2 md:flex">
          <div className="md:h-[350px] overflow-hidden md:order-1">
            <Link href={"/Service3"}>
              <Image
                src="/images/service4.jpeg"
                width={1000}
                height={500}
                className="h-auto w-auto overflow-hidden"
                alt="image"
              />
            </Link>
          </div>
          <div className="px-4 container mx-auto md:h-[350px] md:order-2">
            <h1 className="px-8 text-3xl font-semibold">
              Mobile Application Development
            </h1>
            <p className="px-8 md:py-8">
              We provide affordable mobile application for commercial purpose,
              social use, businesses transaction and individuals. We are able to
              provide you and your company or business, large or small with a
              range of options to ensure we can create the mobile application
              you require.
              <br /> <br /> We offer value for money packages for new business,
              established companies and individuals.By combining marketing
              expertise and design skills, SRIC offers a full
              spectrum of professional, quality-driven services on custom mobile
              application development services, and mobile application
              programming, multimedia presentation design and development,
              corporate identity, custom print graphics, and original art work
            </p>
          </div>
        </div>
      </div>
      <CustomButton />
    </div>
  );
}
