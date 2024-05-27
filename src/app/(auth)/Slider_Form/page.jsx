import { Suspense } from "react";

import dynamic from "next/dynamic";

// Dynamically import the Slider_Form component
const Slider_Form = dynamic(() => import("../Components/Slider_Form"), {
  suspense: true,
  ssr: false, // Ensure this component is only loaded on the client side
});

export default function SliderPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Slider_Form />;
    </Suspense>
  );
}
