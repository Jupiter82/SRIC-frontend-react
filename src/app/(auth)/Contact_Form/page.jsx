import { Suspense } from "react";

import dynamic from "next/dynamic";

// Dynamically import the Slider_Form component
const Contact_Form = dynamic(() => import("../Components/Contact_Form"), {
  suspense: true,
  ssr: false, // Ensure this component is only loaded on the client side
});

export default function ContactForm() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Contact_Form />;
    </Suspense>
  );
}
