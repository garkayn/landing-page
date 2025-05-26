import Header from "../components/header";
import Hero from "../components/hero";
import Solution from "../components/solution";
import Roadmap from "../components/roadmap";
import Footer from "../components/footer";
import I18nProviderWrapper from "./i18n-provider"; // ajusta la ruta si es necesario

export default function Home() {
  return (
    <I18nProviderWrapper>
      <main className="absolute top-0 left-0 w-full h-full object-cover scrollbar">
        <Header />
        <Hero />
        <Solution />
        <Roadmap />
        <Footer />
      </main>
    </I18nProviderWrapper>
  );
}
