import { Suspense } from "react";

import dynamic from "next/dynamic";

// Dynamically import the Slider_Form component
const Logo_form = dynamic(() => import("../Components/Logo_form"), {
  suspense: true,
  ssr: false, // Ensure this component is only loaded on the client side
});

export default function Logoform() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Logo_form />;
    </Suspense>
  );
}
