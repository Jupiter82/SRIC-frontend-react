import { Suspense } from "react";

import dynamic from "next/dynamic";

// Dynamically import the Slider_Form component
const Abouts_Form = dynamic(() => import("../Components/Abouts_Form"), {
  suspense: true,
  ssr: false, // Ensure this component is only loaded on the client side
});

export default function AboutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Abouts_Form />;
    </Suspense>
  );
}
