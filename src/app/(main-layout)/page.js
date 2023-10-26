import AdvisoryBoard from "@/Components/AdvisoryBoard";
import Banner from "@/Components/Banner";
import Categories from "@/Components/Categories";
import StartedSection from "@/Components/StartedSection";
import ConcatUs from "@/Components/Thankful/ConcatUs";
import NewsLetter from "@/Components/Thankful/NewsLetter";
import Thankful from "@/Components/Thankful/Thankful";
import TicketSelse from "@/Components/Thankful/TicketSelse";

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <StartedSection></StartedSection>
      <Categories></Categories>
      <AdvisoryBoard></AdvisoryBoard>
      <Thankful></Thankful>
      <NewsLetter></NewsLetter>
      <TicketSelse></TicketSelse>
      <ConcatUs></ConcatUs>
    </main>
  )
}
