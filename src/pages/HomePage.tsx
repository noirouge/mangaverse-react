import NewsSection from "../components/NewsSection";
import ReadingSection from "../components/Reading/ReadingSection";
import TreedingSection from "../components/TreedingSection";

export default function HomePage() {
  return (
    <main className="container mx-auto p-2 flex flex-col ">
    <TreedingSection />
    <ReadingSection />
    <NewsSection />
    </main>
  )
}
