import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import CostCalculator from "./components/CostCalculator.jsx";
import SkillMatcher from "./components/SkillMatcher.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SkillsSection />
        <CostCalculator />
        <SkillMatcher />
      </main>
      <Footer />
    </>
  );
}

export default App;
