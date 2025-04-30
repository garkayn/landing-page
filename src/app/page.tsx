import Header from "../components/header";
import Hero from "../components/hero";
import Solution from "../components/solution"
import Roadmap from "../components/Roadmap/roadmap";
import Footer  from "../components/footer";


export default function Home() {
  return (
    <main className="absolute top-0 left-0 w-full h-full object-cover">
      <Header />
      <Hero />
      <Solution />
      <Roadmap />
      <Footer />
    </main>
    
  );
}