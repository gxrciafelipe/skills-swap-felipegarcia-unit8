function FilterBar({ categories, selected, onSelect }) {
  return (
    <div className="filter-bar" role="group" aria-label="Filter skills by category">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`filter-button${selected === category ? " active" : ""}`}
          aria-pressed={selected === category}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
