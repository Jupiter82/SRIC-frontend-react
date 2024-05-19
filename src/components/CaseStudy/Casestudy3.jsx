import React from "react";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";

export default function CaseStudy3() {
  return (
    <div className="">
      <div className="relative overflow-hidden">
        <Image
          src="/images/banner1.jpg"
          width={1000}
          height={1000}
          className=" w-full h-[350px] object-cover blur-sm"
          quality={85}
          alt="Carousel image 2"
        />
        <div className="">
          <h1 className="text-black z-10 font-bold text-4xl absolute top-[35%] md:left-[20%] left-[35%]">
            Case Study Web Development
          </h1>
        </div>
      </div>
      <div className="container mx-auto flex-col-1">
        <div className="container mx-auto sm:py-2 md:flex">
          <div className="md:h-[350px] overflow-hidden md:order-1">
            <Image
              src="/images/service2.jpeg"
              width={1000}
              height={500}
              className="h-auto w-auto px-4"
              alt="image"
            />
          </div>
          <div className="px-4 container mx-auto md:h-[350px] md:order-2">
            <h1 className="px-8 text-3xl font-semibold">
              Fresh website 
            </h1>
            <p className="px-8 md:py-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at
              mauris et elit interdum fringilla sed vitae leo. Phasellus varius
              tortor et sodales vehicula. Pellentesque ac mollis augue, egestas
              semper tellus. Vivamus sed orci nunc. Maecenas hendrerit sagittis
              metus a volutpat. Quisque lobortis est eget accumsan dapibus. Sed
              lacinia tincidunt auctor. Ut cursus dignissim purus et euismod.
              Vivamus sed eros dapibus quam tincidunt gravida sit amet vitae mi.
              Curabitur vel arcu vitae sem malesuada aliquet. Aenean leo justo,
              maximus eu lobortis non, aliquet vel justo. Aliquam at dolor ante.
              Praesent nisl eros, cursus quis nunc eu, viverra gravida ante.
              Nullam egestas, purus sed interdum cursus, velit justo suscipit
              tortor, sed gravida urna sem sed est. Donec tincidunt massa ante,
              nec euismod eros faucibus et. Vestibulum aliquet posuere metus,
              ullamcorper congue eros venenatis a.
            </p>
          </div>
        </div>
        <div className="container mx-auto sm:py-2 md:flex">
          <div className="md:h-[350px] overflow-hidden md:order-1">
            <Image
              src="/images/service3.jpeg"
              width={1000}
              height={500}
              className="h-auto w-auto"
              alt="image"
            />
          </div>
          <div className="px-4 container mx-auto md:h-[350px] md:order-">
            <p className="px-8 md:py-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at
              mauris et elit interdum fringilla sed vitae leo. Phasellus varius
              tortor et sodales vehicula. Pellentesque ac mollis augue, egestas
              semper tellus. Vivamus sed orci nunc. Maecenas hendrerit sagittis
              metus a volutpat. Quisque lobortis est eget accumsan dapibus. Sed
              lacinia tincidunt auctor. Ut cursus dignissim purus et euismod.
              Vivamus sed eros dapibus quam tincidunt gravida sit amet vitae mi.
              Curabitur vel arcu vitae sem malesuada aliquet. Aenean leo justo,
              maximus eu lobortis non, aliquet vel justo. Aliquam at dolor ante.
              Praesent nisl eros, cursus quis nunc eu, viverra gravida ante.
              Nullam egestas, purus sed interdum cursus, velit justo suscipit
              tortor, sed gravida urna sem sed est. Donec tincidunt massa ante,
              nec euismod eros faucibus et. Vestibulum aliquet posuere metus,
              ullamcorper congue eros venenatis a.
            </p>
          </div>
        </div>
        <div className="container mx-auto sm:py-2 md:flex">
          <div className="md:h-[350px] overflow-hidden md:order-1">
            <Image
              src="/images/service4.jpeg"
              width={1000}
              height={500}
              className="h-auto w-auto overflow-hidden"
              alt="image"
            />
          </div>
          <div className="px-4 container mx-auto md:h-[350px] md:order-2">
            <p className="px-8 md:py-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at
              mauris et elit interdum fringilla sed vitae leo. Phasellus varius
              tortor et sodales vehicula. Pellentesque ac mollis augue, egestas
              semper tellus. Vivamus sed orci nunc. Maecenas hendrerit sagittis
              metus a volutpat. Quisque lobortis est eget accumsan dapibus. Sed
              lacinia tincidunt auctor. Ut cursus dignissim purus et euismod.
              Vivamus sed eros dapibus quam tincidunt gravida sit amet vitae mi.
              Curabitur vel arcu vitae sem malesuada aliquet. Aenean leo justo,
              maximus eu lobortis non, aliquet vel justo. Aliquam at dolor ante.
              Praesent nisl eros, cursus quis nunc eu, viverra gravida ante.
              Nullam egestas, purus sed interdum cursus, velit justo suscipit
              tortor, sed gravida urna sem sed est. Donec tincidunt massa ante,
              nec euismod eros faucibus et. Vestibulum aliquet posuere metus,
              ullamcorper congue eros venenatis a.
            </p>
          </div>
        </div>
      </div>
      <CustomButton />
    </div>
  );
}
