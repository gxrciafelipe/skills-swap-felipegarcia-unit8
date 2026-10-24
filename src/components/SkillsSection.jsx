import { useState } from "react";
import FilterBar from "./FilterBar.jsx";
import SkillCard from "./SkillCard.jsx";
import { skills, CATEGORIES } from "../data/skills.js";
import { filterSkillsByCategory } from "../../skillswap-functions.js";

function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const visibleSkills = filterSkillsByCategory(skills, selectedCategory);

  return (
    <section id="skills" className="skills">
      <h2>Popular Skills</h2>
      <FilterBar
        categories={["All", ...CATEGORIES]}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <div className="skills-grid">
        {visibleSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
      {visibleSkills.length === 0 && <p>No skills in this category yet.</p>}
    </section>
  );
}

export default SkillsSection;
