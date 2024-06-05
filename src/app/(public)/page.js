import About from "@/components/About";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import Categories from "@/components/Categories";
import CustomButton from "@/components/CustomButton";
import Instructor from "@/components/Instructor";
import Service from "@/components/Service";
import Popular_course from "@/components/Popular_course";
import Tesimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
      <Carousel />
      {/* <Card /> */}
      <About />
      <Service />
      <Categories />
      <Popular_course />
      <Instructor />
      <Tesimonial />
      <CustomButton />
    </div>
  );
}
