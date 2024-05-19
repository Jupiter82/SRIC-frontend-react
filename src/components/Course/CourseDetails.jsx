import React from "react";
import Image from "next/image";

export default function CourseDetails() {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl text-blue-400 py-4 font-semibold">Web development</h1>
      <div className="flex justify-center">
      <Image
        src="/images/cat-1.jpg"
        width={400}
        height={400}
        className="w-[50%]"
        alt=""
      />
      </div>
      <div className="px-4 container mx-auto md:h-[350px] md:order-">
        <p className="px-8 md:py-8">
          By combining marketing expertise and design skills, Softech Foundation
          offers a full spectrum of professional, quality-driven services on
          custom website design and re-design, Flash web site design and
          programming, multimedia presentation design and development, corporate
          identity, custom print graphics, and original art work.
          <br /> <br />
          The team of design and marketing professionals at Softech Foundation
          blends inspiration, creative approach and technical skills to help you
          communicate with your clients and network more effectively, position
          your brand, or take your business to new heights.
        </p>
      </div>
    </div>
  );
}
