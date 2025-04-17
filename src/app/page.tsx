import Roadmap from "../../components/Roadmap";
import { roadmapItems } from "../../data/roadmapItems";

export default function Home() {
  return (
    <main className="container mx-auto">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-center mb-12">
          The Landing Page
        </h1>
        <img  src="mars.jpg" className="rounded-lg shadow-md border-3 border-gray-200" alt="Mars"></img>
      </div>
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Description
        </h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam aspernatur doloribus accusantium praesentium a, facilis pariatur, ex et quod inventore aliquam laudantium ad eveniet quaerat aut! Soluta sed quisquam tempore.</p>
      </div>
      
      <Roadmap items={roadmapItems} />
    </main>
  );
}