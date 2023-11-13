import Banner from "@/Components/Banner/Banner";
import Categories from "@/Components/Categories/Categories";
import ContactUs from "@/Components/ContactUs/ContactUs";
import StartedSection from "@/Components/StartedSection/StartedSection";
import Testimonial2 from "@/Components/Testimonial/Testimonial2";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Banner></Banner>
      <StartedSection></StartedSection>
      <Categories></Categories>
      {/* <AdvisoryBoard></AdvisoryBoard> */}
      {/* <Thankful></Thankful> */}
      {/* <NewsLetter></NewsLetter> */}
      {/* <TicketSelse></TicketSelse> */}
      <Testimonial2></Testimonial2>
      <ContactUs></ContactUs>
    </main>
  )
}
