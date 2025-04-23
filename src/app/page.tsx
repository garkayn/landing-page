import Header from "../components/Header/header";
import Hero from "../components/Hero/hero";
import Solution from "../components/Solution/solution"
import Roadmap from "../components/Roadmap/roadmap";
import Footer  from "../components/Footer/footer";


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