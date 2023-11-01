import Banner from "@/Components/Banner/Banner";
import Categories from "@/Components/Categories/Categories";
import ContactUs from "@/Components/ContactUs/ContactUs";
import StartedSection from "@/Components/StartedSection/StartedSection";

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
      <ContactUs></ContactUs>
    </main>
  )
}
