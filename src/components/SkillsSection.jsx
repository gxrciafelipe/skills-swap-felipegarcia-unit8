import SkillCard from "./SkillCard.jsx";
import { skills } from "../data/skills.js";

function SkillsSection() {
  return (
    <section id="skills" className="skills">
      <h2>Popular Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
