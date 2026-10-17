import { useState } from "react";

function SkillCard({ skill }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={`skill-card${expanded ? " expanded" : ""}`}>
      <span className="tag">{skill.category}</span>
      <h3>{skill.title}</h3>
      <p>{skill.description}</p>
      <p className="price">{skill.price}</p>
      <p className="provider">Provider: {skill.provider}</p>

      {expanded && (
        <div className="card-details">
          <p>{skill.details}</p>
        </div>
      )}

      <button
        type="button"
        className="card-toggle"
        aria-expanded={expanded}
        onClick={() => setExpanded((prev) => !prev)}
      >
        {expanded ? "Hide details" : "Show details"}
      </button>
    </article>
  );
}

export default SkillCard;
