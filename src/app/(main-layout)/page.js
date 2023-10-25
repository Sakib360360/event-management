import AdvisoryBoard from "@/Components/AdvisoryBoard";
import Banner from "@/Components/Banner";
import Categories from "@/Components/Categories";
import StartedSection from "@/Components/StartedSection";
import Thankful from "@/Components/Thankful/Thankful";

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <StartedSection></StartedSection>
      <Categories></Categories>
      <AdvisoryBoard></AdvisoryBoard>
      <Thankful></Thankful>
    </main>
  )
}
