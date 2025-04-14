import Roadmap from "../../components/Roadmap";
import { roadmapItems } from "../../data/roadmapItems";

export default function Home() {
  return (
    <main>
      {/* Otras secciones (Hero, Navbar, etc.) */}
      <Roadmap items={roadmapItems} />
    </main>
  );
}