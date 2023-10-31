import Banner from "@/Components/Banner/Banner";
import Categories from "@/Components/Categories/Categories";
import StartedSection from "@/Components/StartedSection/StartedSection";
import ConcatUs from "@/Components/Thankful/ConcatUs";

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
      <ConcatUs></ConcatUs>
    </main>
  )
}
