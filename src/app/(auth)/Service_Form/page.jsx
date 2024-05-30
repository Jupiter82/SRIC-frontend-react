import { Suspense } from "react";

import dynamic from "next/dynamic";

// Dynamically import the Slider_Form component
const Service_Form = dynamic(() => import("../Components/Testimonial_Form"), {
  suspense: true,
  ssr: false, // Ensure this component is only loaded on the client side
});

export default function ServiceForm() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Service_Form />;
    </Suspense>
  );
}
